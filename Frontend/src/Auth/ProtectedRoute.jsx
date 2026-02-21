import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    let token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to='/login' />
    }

    return children
}

export default ProtectedRoute