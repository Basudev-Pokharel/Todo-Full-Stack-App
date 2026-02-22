import React, { use, useContext } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'
import { DataContext } from './context/DataProvider'
import SmallNav from './Components/SmallNav/SmallNav'

const Layout = () => {
    let { openNav, windowWidth } = useContext(DataContext);
    return (
        <>
            <Header></Header>
            {openNav && windowWidth <= 500 && <SmallNav />}
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout