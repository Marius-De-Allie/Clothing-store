import React from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { SignInWithGoogle, signInWithGoogle } from '../firebase/firebase.utils';
// styles.
import '../styles/signIn.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = evt => {
        const { value, name } = evt.target;
        this.setState(() => ({[name]: value}));
    };

    handleSubmit = evt => {
        evt.preventDefault();
        // reset both input fields to an empty string
        this.setState(() => ({
            email: '',
            password: ''
        }))
    };


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id="email"
                        type="email" 
                        value={this.state.email} 
                        name="email"
                        required
                        handleChange={this.handleChange}
                        label="email"
                    />
                    <FormInput 
                        id="password"
                        type="password" 
                        value={this.state.password} 
                        name="password"
                        required
                        handleChange={this.handleChange}
                        label="password"
                    />
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
};

export default SignIn;