import React from 'react';
// styles.
import '../styles/formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="gropup"> 
        <input 
            className="form-input" 
            onChange={handleChange} 
            {...otherProps} 
        />
        {
            label ? 
            <label htmlFor={otherProps.id} className={`${otherProps.value.length? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            : null
        }
    </div>
);

export default FormInput;