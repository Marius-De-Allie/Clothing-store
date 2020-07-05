import React from 'react';

// styles.
import '../styles/customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => {
    console.log(inverted);
    return (
        <button 
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;

