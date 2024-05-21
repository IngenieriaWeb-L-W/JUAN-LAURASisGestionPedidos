/* eslint-disable import/no-default-export */
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}: any) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout