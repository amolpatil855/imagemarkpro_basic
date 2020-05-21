import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Grid from "@material-ui/core/Grid";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router";

import CardSection from "./CardSection";

function CheckoutForm({props,history}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] =useState('');
  const { email, firstName, lastName, password,type, newPlan } = props;
  let selectedPlan = { ...JSON.parse(localStorage.getItem("selectedPlan")) };
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //check if form is empty
    if(type === 'pay'){
      if (firstName && lastName && email && password){
        setError(false);
    } else {
        setError(true);
        setErrorMessage("Please fill the required fields");
        return;
    }
    }
    

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    try {
      setLoading(true);
      let response = await axios.post(
        "https://eternus-imagemarkpro.herokuapp.com/payment",
        {
          amount: type==='pay' ? selectedPlan.price * 100 : newPlan.price * 100,
          currency: "usd",
        }
      );

      const result = await stripe.confirmCardPayment(
        response.data.data.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: firstName + " " + lastName,
            },
          },
        }
      );

      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        setLoading(false);
        setError(true);
        setErrorMessage(result.error.message)
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === "succeeded") {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          let users = JSON.parse(localStorage.getItem("users"));
          users = users ? [...users] : [];

          let user = {
            firstName,
            lastName,
            email,
            password,
          };

          users.push(user);

          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("currentUser", JSON.stringify(user));
          setLoading(false);

          //if plan updated, set in local storage
          if(type==='upgrade'){
            localStorage.setItem('selectedPlan',JSON.stringify(newPlan));
            selectedPlan=newPlan;
          }

          
            history.push('/c')
        
          

          //send email to the user
          await axios.post('https://eternus-imagemarkpro.herokuapp.com/subscribe',
          {
              name:firstName + " " + lastName,
              email:email,
              plan_type:selectedPlan.heading,
              amount:selectedPlan.price
          });
        }
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <Grid item xs={12}>
      <CardSection />
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        type="submit"
        size="large"
        disabled={loading}
        className="my-2"
        onClick={(e) => handleSubmit(e)}
      >
        {type==='pay' ? 'SUBSCRIBE' : 'UPGRADE NOW'}
        {loading ? <CircularProgress className="mx-2" size={20} /> : ""}
      </Button>
      {error ? <div className="text-danger center">{errorMessage}</div> : ""}
    </Grid>
  );
}

export default withRouter(CheckoutForm);
