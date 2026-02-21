import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import style from './Login.module.css'
import { AuthContext } from '../../context/AuthProvider'

const Login = () => {
    const [loginRedirect, setloginRedirect] = useState(null)
    const [formData, setformData] = useState({
        email: '',
        password: '',
    });
    let navigate = useNavigate();
    const location = useLocation();
    let { login, loginError, loginLoading } = useContext(AuthContext);
    useEffect(() => {
        if (location?.state?.message) {
            let { message } = location?.state;
            setloginRedirect(message);
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({ ...prev, [name]: value }));
    }

    // Submit login from here
    const SubmitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        let success = await login(formData);
        if (success) navigate('/dashboard');
    }

    return (
        <section className="min-h-80 flex items-center justify-center flex-col gap-1  text-center">
            <h2>Login with your Credentials</h2>
            {loginRedirect && <h3>{loginRedirect}</h3>}
            <form onSubmit={SubmitForm} className='flex gap-1 flex-col' style={{ width: 'min(300px)' }}>
                <input type="email" placeholder='Email' name='email' className='p-0.5' autoFocus onChange={handleChange} />
                {loginError?.email?.[0] && <p className='text-red'>{loginError?.email?.[0]}</p>}
                <input type="password" placeholder='Password' name='password' className='p-0.5' onChange={handleChange} />
                {loginError?.password?.[0] && <p className='text-red'>{loginError?.password?.[0]}</p>}
                {loginError?.login_error && <p className='text-red'>{loginError?.login_error}</p>}
                {!loginLoading && <button className='hero-btn w-100'>Login &#8594; </button>}
                {loginLoading && <button className='hero-btn w-100' disabled>Wait ... </button>}
                <p>Don't have account? <Link to='/sign-up' className={`text-decoration-none text-color ${style.register}`}>Register</Link></p>
            </form>
        </section>
    )
}

export default Login