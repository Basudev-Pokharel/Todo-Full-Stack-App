import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import Style from './SmallNav.module.css'
import { AuthContext } from '../../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';

const SmallNav = () => {
    let { user, logout } = useContext(AuthContext);
    const { windowWidth, openNav, setOpenNav, setTheme, theme } = useContext(DataContext);
    let location = useLocation();
    const pathname = location?.pathname;
    let navigate = useNavigate();
    return (
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
                <li><button onClick={() => {
                    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
                }} className={`cursor-pointer ${Style.theme_toogle}`}>{theme == 'light' ? "🌙" : "☀️"}</button></li>
            </ul>
        </nav>
    )
}

export default SmallNav