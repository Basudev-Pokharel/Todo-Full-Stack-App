import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Header.module.css'

const Header = () => {
    return (
        <header className="border p-1 flex items-center justify-between">
            <h2>ToDO</h2>
            <nav className={Style.navigation}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login" className={`btn`}>Login</Link></li>
                    <li><Link to="/sign-up" className={'btn'}>Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
