import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
// styles.
import '../styles/signIn.scss';


const SignIn = () => {

    // Component state.
    const [credentials, setCredentials] = useState({email: '', password: ''});

    const { email, password } = credentials;

    const handleChange = evt => {
        const { value, name } = evt.target;
        setCredentials({...credentials, [name]: value})
    };

    const handleSubmit = async evt => {
        evt.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({...credentials, email: '', password: ''})
        } catch(error) {
            console.log(error);
        }
        // reset both input fields to an empty string
        // setCredentials({...credentials, email: '', password: ''})
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    id="email"
                    type="email" 
                    value={email} 
                    name="email"
                    required
                    handleChange={handleChange}
                    label="email"
                    autoFocus
                    autoComplete="new-off"
                />
                <FormInput 
                    id="password"
                    type="password" 
                    value={password} 
                    name="password"
                    required
                    handleChange={handleChange}
                    label="password"
                    autoComplete="new-password"
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton id="google-btn" type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
};
// const SignIn = () => {

//     // Component state.
//     const [credentials, setCredentials] = useState({email: '', password: ''});

//     // useEffect(() => {
//     //     setCredentials({
//     //         ...credentials, email: '', password: ''
//     //     })
//     // }, [credentials])

//     const { email, password } = credentials;

//     const handleChange = evt => {
//         const { value, name } = evt.target;
//         setCredentials({...credentials, [name]: value})
//     };

//     const handleSubmit = async evt => {
//         evt.preventDefault();
        
//         try {
//             await auth.signInWithEmailAndPassword(email, password);
//             setCredentials({...credentials, email: '', password: ''})
//         } catch(error) {
//             console.log(error);
//         }
//         // reset both input fields to an empty string
//         setCredentials({...credentials, email: '', password: ''})
//     };

//     return (
//         <div className="sign-in">
//             <h2>I already have an account</h2>
//             <span>Sign in with your email and password</span>
//             <form onSubmit={handleSubmit}>
//                 <FormInput
//                     id="email"
//                     type="email" 
//                     value={email} 
//                     name="email"
//                     required
//                     handleChange={handleChange}
//                     label="email"
//                     autoComplete="new-off"
//                 />
//                 <FormInput 
//                     id="password"
//                     type="password" 
//                     value={password} 
//                     name="password"
//                     required
//                     handleChange={handleChange}
//                     label="password"
//                     autoComplete="new-password"
//                 />
//                 <div className="buttons">
//                     <CustomButton type="submit"> Sign In </CustomButton>
//                     <CustomButton id="google-btn" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
//                 </div>
//             </form>
//         </div>
//     )
// };

export default SignIn;