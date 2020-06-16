import React from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
// styles.
import '../styles/signUp.scss';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async evt => {
        evt.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword) {
            alert(`passwords don't match`);
            return;
        } else {
            try {
                const { user } = auth.createUserWithEmailAndPassword(email, password);

                await createUserProfileDocument(user, {displayName});
                // empty input fields.
                this.setState(() => ({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }));
            } catch(error) {
                console.error(error);
            }
        }
    };
    
    handleChange = evt => {
        const{ name, value} = evt.target;

        this.setState(() => ({
            [name]: value
        }));
    };

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        lable="Display Name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        lable="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        lable="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        lable="Confirm Password"
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
};

export default SignUp;