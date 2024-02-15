import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Dashboard from '../dashboard/pages/Dashboard'
import DashboardBody from '../dashboard/pages/DashboardBody'
import AddProducts from '../dashboard/pages/AddProducts'
import DashboardProducts from '../dashboard/pages/DashboardProducts'
import DashboardProductsDetails from '../dashboard/pages/DashboardProductsDetails'

const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            children: [
                {
                    path:"/home",
                    element: <HomePage />
                }]
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
                {
                  path: '/dashboard',
                  element: <DashboardBody />
                },
                {
                    path: '/dashboard/addProducts',
                    element: <AddProducts/>
                },
                {
                    path: '/dashboard/products',
                    element: <DashboardProducts/>
                },
                {
                    path:'/dashboard/products/:id',
                    element:<DashboardProductsDetails/>
                }
            ]
        }
    ])
    return (
        <div><RouterProvider router={routes} /></div>
    )
}

export default AppRoutes