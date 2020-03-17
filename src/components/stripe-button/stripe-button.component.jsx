import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xBwkcfdujm3sLcSL39ggqd1300xVN4TM82';

    const onToken = token => {
        console.log(token);
        alert('Payment succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;