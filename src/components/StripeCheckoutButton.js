import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51Gvru9BC8emmIHok575meXvz37Ly5cn5BhiKZ6vfuojHhDQoCGbu64WLEuD9ui5bzKcSbWHXf02kQh8ie8bHArSm00bUe3IFxb';

    const onToken = token => {
        console.log(token);
        alert('Payment succesful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Clothing Store"
            billingAddress
            shippingAddress
            // image="https://svgsgare,com.i/CUz.svg"
            description={`Your total is $${price}`}
            amount={stripePrice}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;