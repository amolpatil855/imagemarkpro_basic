import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function StripeCheckout(props) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm props={props}/>
    </Elements>
  );
};

export default StripeCheckout;
