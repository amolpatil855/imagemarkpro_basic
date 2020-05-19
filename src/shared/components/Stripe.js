import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = 200 * 100;
    const publishableKey = 'pk_test_XYvmE5TajMgIhIA1DzBQa2a400wNpknrea'

    const onToken = token => {
        axios({
            url:'https://eternus-imagemarkpro.herokuapp.com/payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token,
                first_name: "amol",
                last_name: "Patil",
                email : "patilbharat09@gmail.com",
                plan_type: "GOLD Plan",
            }
        })
        .then(response => {
            alert('Payment Successful');
        })
        .catch(error => {
            console.log('Payment error :',JSON.parse(error));
            alert('There was an issue with your payment.Please make sure you use the provided credit card');
        });
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Image MarkPro Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is Rs ${priceForStripe}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;