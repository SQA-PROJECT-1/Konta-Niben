import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const Dashboard = () => {
  return (
    <div>
        <DashboardNavbar/>
        <div className='min-h-screen'>
        <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard