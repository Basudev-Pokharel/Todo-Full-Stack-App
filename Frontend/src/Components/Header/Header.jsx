import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Style from './Header.module.css'
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    let { user, logout } = useContext(AuthContext);
    let location = useLocation();
    const pathname = location?.pathname;
    let navigate = useNavigate();
    return (
        <header className="border p-1 flex items-center justify-between">
            <h2>ToDO</h2>
            <nav className={Style.navigation}>
                <ul>
                    {pathname !== '/' && <li><Link to="/">Home</Link></li>}
                    {user && pathname === '/' && <li><Link to="/dashboard">Dashboard</Link></li>}
                    {user && <li><button className='btn' onClick={() => { logout(); navigate('/'); }}>Logout</button></li>}
                    {
                        !user && <>
                            <li><Link to="/login" className={`btn`}>Login</Link></li>
                            <li><Link to="/sign-up" className={'btn'}>Sign Up</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
