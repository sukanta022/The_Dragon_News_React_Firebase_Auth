import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { createUser,updateUserProfile } = use(AuthContext)
    const navigate = useNavigate()
    const handlePasswordFeild = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleRegister = (e) => {
        setError('')
        setSuccess(false)
        e.preventDefault()
        const email =  e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked
        const name = e.target.name.value
        const photoUrl = e.target.photo.value
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{7,}$/;

               
        if(!passwordRegex.test(password)){
            setError('Password must be at least 7 characters long and include at least one uppercase letter, one lowercase letter, and one special character.');
            return
        }
        
        if(!terms){
            setError('Please accept our terms and conditions')
            return
        }

        createUser(email,password)
        .then((result)=>{
            const profile = {
                displayName : name,
                photoURL : photoUrl
            }
            updateUserProfile(result.user, profile)
            .then(() => {})
            .catch((error)=>{console.log(error)})
            console.log(result.user)
            setSuccess(true)
            navigate("/")
        })
        .catch((error) => {
            setError(error.message)
        })

        

        
        

        e.target.reset()


        
    }
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className=" flex justify-center items-center min-h-screen">
                <div className="flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center mb-3">Register Now</h1>
        
                    </div>
                    <div className="card bg-base-100 w-sm shadow-5xl">
                        
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Enter name</label>
                                    <input type="text" name="name" className="input" placeholder="Your name" />
                                    {/* Photo url */}
                                    <label className="label">Enter photo url</label>
                                    <input type="text" name="photo" className="input" placeholder="Photo url" />
                                    <label className="label">Email</label>
                                    {/* password */}
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    {/* password */}
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" />

                                        <button onClick={handlePasswordFeild} className='text-2xl absolute top-2 right-6'>
                                            {
                                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                            }
                                        </button>

                                    </div>
                                    <label class="label">
                                        <input type="checkbox" name="terms" class="checkbox" />
                                        Accept terms and conditions
                                    </label>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                <p>Already have an account? Please <Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
                            </form>
                        </div>
                        {
                            error && <p className='text-red-500 text-center font-semibold'>{error}</p> 
                        }
                        {
                            success &&  <p className='text-green-500 text-center'>Account created succesfullt</p>
                        }
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;