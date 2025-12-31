import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <p className='font-bold text-xl mb-5'>Login With</p>
            <div className='grid grid-cols-1 gap-3'>
                <button className='btn text-[18px] p-4 btn-outline btn-accent'><FcGoogle size={24} ></FcGoogle> Login with Google</button>
                <button className='btn text-[18px] p-4 btn-outline'><FaGithub size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;