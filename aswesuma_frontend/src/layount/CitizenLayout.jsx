import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
function CitizenLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default CitizenLayout