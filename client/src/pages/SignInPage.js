import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
// styles.
import '../styles/signInPage.scss';

const SignInPage = () => (
    <div className="sign-in-page">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInPage;