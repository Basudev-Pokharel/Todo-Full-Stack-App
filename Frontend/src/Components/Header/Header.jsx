import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Style from './Header.module.css'
import { AuthContext } from '../../context/AuthProvider';
import { DataContext } from '../../context/DataProvider';

const Header = () => {
    let { user, logout } = useContext(AuthContext);
    const { windowWidth, openNav, setOpenNav, theme, setTheme } = useContext(DataContext);

    let location = useLocation();
    const pathname = location?.pathname;
    let navigate = useNavigate();
    // Theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <header className={`${Style.header_container} flex items-center justify-between p-1`}>
            <h2 onClick={() => {
                window.location.href = '/'
            }} className='cursor-pointer'>ToDO</h2>
            {windowWidth > 500 &&
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
                </nav>}
            {windowWidth <= 500 && <button className={`btn ${Style.menu_btn}`} onClick={() => setOpenNav(prev => !prev)}>{openNav ? "Close" : "Menu"}</button>}
        </header>
    )
}

export default Header
