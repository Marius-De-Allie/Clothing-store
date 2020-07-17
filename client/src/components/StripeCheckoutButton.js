import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { emptyCart } from '../redux/actions/cart';

const StripeCheckoutButton = ({ price }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51Gvru9BC8emmIHok575meXvz37Ly5cn5BhiKZ6vfuojHhDQoCGbu64WLEuD9ui5bzKcSbWHXf02kQh8ie8bHArSm00bUe3IFxb';

    const onToken = token => {
        // axios.post('/payment', {
        //     amount: stripePrice,
        //     token
        // })
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        })
        .then(res => {
            alert('Payment successful');
            // on successfully payment dispatch EMPTY_CART action to clear cart contents.
            dispatch(emptyCart());
            // redirect to homepage.
        })
        .catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment, please make sure you use the provided credit card.');
        });
    };

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