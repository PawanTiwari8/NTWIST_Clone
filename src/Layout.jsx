import React from 'react'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout