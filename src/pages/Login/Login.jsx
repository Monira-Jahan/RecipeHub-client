import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGoogle,FaGithub} from 'react-icons/fa';

const Login = () => {
    const {signIn}=useContext(AuthContext);

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
   
        signIn(email,password)
        .then(result=>{
           const loggedUser=result.user;
           console.log(loggedUser);
           form.reset();
       })
       .catch(error=>{
           console.log(error);
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
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary hover:font-bold">Login</button>
                            </div>
                            <hr></hr>
                            <button className="btn btn-wide bg-blue-500 border-none"><FaGoogle/>Login With Google</button>
                            <button className="btn btn-wide bg-red-600 border-none"><FaGithub/>Login with GitHub</button>
                        </form>
                        
                        <p className='mb-4 ml-8'><Link to="/register" className=" ps-3 label-text-alt link link-hover">
                       New to the Auth Master? Please Register
                        </Link></p>
                    </div>
                </div>
            </div>
    
    );
};

export default Login;