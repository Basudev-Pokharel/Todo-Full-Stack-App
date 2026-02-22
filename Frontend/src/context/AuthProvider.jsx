import React, { createContext, useEffect, useState } from 'react'
import { API } from '../Services/api.js';
import { useNavigate } from 'react-router';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [registerError, setRegisterError] = useState(null);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [loginLoading, setLoginLoading] = useState(false);
    const [user, setUser] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token && user) {
            setUser(user);
        }
    }, [])


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
        try {
            setLoginLoading(true);
            const response = await API.post('login', data);
            if (response?.data?.status == true) {
                setUser(response?.data?.user);
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

    //logout function here
    async function logout() {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
        } catch (err) {
            console.error("Logout error:", err);
        }
    }

    return (
        <AuthContext.Provider value={{ register, registerError, registerLoading, loginLoading, loginError, login, user, logout }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider