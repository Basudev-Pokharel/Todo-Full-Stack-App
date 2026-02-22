import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            <section className={`${styles.home_container} min-h-80 flex flex-col items-center justify-center gap-1 text-center`}>
                <h1>Organize your tasks efficiently</h1>
                <p>Get started with your productivity journey today!</p>
                <Link to="/dashboard" className='hero-btn text-decoration-none'>Start Now</Link>
            </section>
            <section className={`min-h-50 ${styles.about_container} flex flex-col items-center justify-center gap-1 my-1`}>
                <h2 className='text-center'>Why Choose ToDo App?</h2>
                <div>
                    <img src="/images/todo_image.jpeg" alt="About Image" />
                    <div className='w-100 p-1 flex flex-col items-center justify-center gap-1'>
                        <p>Our app helps you stay organized and boost your productivity with a clean, intuitive interface.</p>
                        <Link to="/dashboard" className='hero-btn text-decoration-none'>Go to Dashboard</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home