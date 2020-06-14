import React from 'react';

// styles.
import '../styles/customButton.scss';

const CustomButton = ({ children, ...otherProps}) => (
    
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustomButton;