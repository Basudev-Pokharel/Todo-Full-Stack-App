import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import style from './Signup.module.css'
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    // Get data from Context
    const { register, registerError, registerLoading } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({ ...prev, [name]: value }));
    }
    const SubmitForm = async (e) => {
        e.preventDefault();
        let success = await register(formData);
        if (success) navigate('/login', { state: { message: 'Registration successful. Please login.' } });
    }
    registerError && console.log("Error from context:", registerError);

    return (
        <section className="min-h-80 flex items-center justify-center flex-col gap-1  text-center">
            <h2>Register your Credentials</h2>
            <form onSubmit={SubmitForm} className='flex gap-1 flex-col border' style={{ width: 'min(300px)' }}>
                <input type="text" name='name' placeholder='Name' className='p-0.5' autoFocus onChange={handleChange} />
                {registerError?.name?.[0] && <p className='text-red'>{registerError?.name?.[0]}</p>}
                <input type="text" name='email' placeholder='Email' className='p-0.5' autoFocus onChange={handleChange} />
                {registerError?.email?.[0] && <p className='text-red'>{registerError?.email?.[0]}</p>}
                <input type="password" name='password' placeholder='Password' className='p-0.5' onChange={handleChange} />
                {registerError?.password?.[0] && <p className='text-red'>{registerError?.password?.[0]}</p>}
                <input type="password" name='password_confirmation' placeholder='Confirm Password' className='p-0.5' onChange={handleChange} />
                {registerLoading && <button className='hero-btn w-100' disabled>Wait ...</button>}
                {!registerLoading && <button className='hero-btn w-100'>Register &#8594; </button>
                }
                <p>Already have account? <Link to='/login' className={`text-decoration-none text-color ${style.login}`}>Login</Link></p>
            </form>
        </section>
    )
}

export default SignUp