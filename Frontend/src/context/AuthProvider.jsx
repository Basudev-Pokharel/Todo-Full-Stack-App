import React, { createContext, useState } from 'react'
import { API } from '../Services/api.js';
import { useNavigate } from 'react-router';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [registerError, setRegisterError] = useState(null);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [loginLoading, setLoginLoading] = useState(false);


    // Function for Register User
    async function register(data) {
        try {
            setRegisterLoading(true);
            const response = await API.post('register', data);
            if (response?.data?.status == true) {
                return true;
            }

        } catch (err) {
            setRegisterError(err?.response?.data?.errors);
        }
        finally {
            setRegisterLoading(false);
        }

    }

    // Function for Login
    async function login(data) {
        console.log('Login funciton begins')
        try {
            setLoginLoading(true);
            const response = await API.post('login', data);
            console.log(response);
            if (response?.data?.status == true) {
                localStorage.setItem('token', response?.data?.token);
                localStorage.setItem('user', JSON.stringify(response?.data?.user));
                return true;
            }

        } catch (err) {
            setLoginError(err?.response?.data?.errors);
        }
        finally {
            setLoginLoading(false);
        }

    }
    return (
        <AuthContext.Provider value={{ register, registerError, registerLoading, loginLoading, loginError, login }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider