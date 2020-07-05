import React, {useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
// styles.
import '../styles/signUp.scss';

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = credentials;

    const handleSubmit = async evt => {
        evt.preventDefault();

        if(password !== confirmPassword) {
            alert(`passwords don't match`);
            return;
        } else {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);

                await createUserProfileDocument(user, {displayName});
                // empty input fields.
                setCredentials({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            } catch(error) {
                console.error(error);
            }
        }
    };
    
    const handleChange = evt => {
        const { name, value} = evt.target;
        setCredentials({...credentials, [name]: value});
    };
    
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;