import React from 'react'
import { Link } from 'react-router'

const Fallback = () => {
    return (
        <section className='min-h-80 flex flex-col items-center justify-center gap-1'>
            <h2 className='text-center my-1'>404 Not Found</h2>
            <h3>This page doesnot exist in our website</h3>
            <Link to="/" className='hero-btn text-decoration-none'>&#x2302; Go Home</Link>
        </section>
    )
}

export default Fallback