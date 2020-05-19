import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = 100;
    const publishableKey = process.env.PUBLISHABLE_KEY

    const onToken = token => {
        console.log('==================hellooooooooooo')
        axios({
            url:'http://localhost:5000/payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
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
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is Rs ${200}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;