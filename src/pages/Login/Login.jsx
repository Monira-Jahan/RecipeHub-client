import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { getAuth,sendPasswordResetEmail ,signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


const Login = () => {
    const auth=getAuth(app);
    //Google sign in
    const googleProvider=new GoogleAuthProvider();
    //Github Sign in
    const githubProvider=new GithubAuthProvider();

    const { signIn } = useContext(AuthContext);
    const emailRef=useRef();
    const [error, setError] = useState('');
    // Sign in with emain and password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
     
        console.log(name, email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }
    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide email address to reset password');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    // Google Sign in
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setuser(loggedInUser);
        })
        .catch(error=>{
            console.log('error',error.message)
        })
    }
    // Github sign in
    const handleGithubSignin=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setuser(loggedUser);
        })
        .catch(error=>{
            console.log('error',error.message)
        })
       }
    return (
        <div className="hero min-h-screen w-full bg-slate-200">
            <div className="container hero-content flex-col">
                <div className="text-center">
                    <h1 className="sm:pt-24 pr-12 lg:text-5xl text-2xl font-bold">Please Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full sm:w-50 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?Please <button onClick={handleResetPassword} className='btn btn-link font-normal text-sm'>Reset Password</button></Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary hover:font-bold">Login</button>
                        </div>
                        <hr></hr>
                        <button onClick={handleGoogleSignIn}className="btn btn-wide bg-blue-500 border-none mx-6"><FaGoogle />Login With Google</button>
                        <button onClick={handleGithubSignin}className="btn btn-wide bg-red-600 border-none mx-6"><FaGithub />Login with GitHub</button>
                    </form>

                    <p className='mb-8 ml-8'><Link to="/register" className="ps-5 label-text-alt link link-hover">
                        New to the Auth Master? Please <button className='btn btn-link'>Register</button>
                    </Link></p>
                    <p className="text-red-400">{error}</p>
                </div>
            </div>
        </div>

    );
};

export default Login;