import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className="border p-1 text-center flex flex-col gap-0.5 items-center justify-center">
            <h3>© 2024 ToDO App. All rights reserved.</h3>
            <p>Designed with ❤️ by <a href="https://www.linkedin.com/in/basudev-pokharel/" target='_main' className={`${styles['basu-text']} text-decoration-none`}>Basu</a></p>
        </footer >
    )
}

export default Footer