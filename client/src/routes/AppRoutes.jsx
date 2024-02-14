import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from '../pages/Body'
import HomePage from '../pages/HomePage'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Body />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                }]
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
        }
    ])
    return (
        <div><RouterProvider router={routes} /></div>
    )
}

export default AppRoutes