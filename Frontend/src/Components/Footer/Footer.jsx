import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer_container} flex items-center justify-center flex-col gap-1 p-1 text-center`}>
            <h3>© 2026 ToDO App. All rights reserved.</h3>
            <p>Designed with ❤️ by <a href="https://www.linkedin.com/in/basudev-pokharel/" target='_main' className={`${styles['basu-text']} text-decoration-none`}>Basu</a></p>
        </footer>
    )
}

export default Footer