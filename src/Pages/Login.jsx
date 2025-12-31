import React, { use, useRef, useState } from 'react';
import { Link} from 'react-router';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
     const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const emailRef = useRef()
    const {userSignIn} = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        setError('')
        setSuccess(false)

        userSignIn(email,password)
        .then((result) => console.log(result.user))
        .catch((error) => setError(error.message))
        
        

    }
    return (
        
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
            
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                    <div ><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <p>New to our website? Please <Link to={'/register'} className='text-blue-500 underline'>Register</Link></p>
                        </div>
                        {
                            error && <p className='text-red-500 text-center font-semibold'>{error}</p> 
                        }
                        {
                            success &&  <p className='text-green-500 text-center'>Logged in successfully</p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;