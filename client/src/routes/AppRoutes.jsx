import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Dashboard from '../dashboard/pages/Dashboard'
import DashboardBody from '../dashboard/pages/DashboardBody'
import AddProducts from '../dashboard/pages/AddProducts'
import DashboardProducts from '../dashboard/pages/DashboardProducts'
import DashboardProductsDetails from '../dashboard/pages/DashboardProductsDetails'
import DashboardUpdateProducts from '../dashboard/pages/DashboardUpdateProducts'
import AllReviews from '../dashboard/pages/AllReview'
import WishList from '../pages/WishList'

const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path:'/home',
            element: <HomePage />
        },
        {
            path:'/wishList',
            element: <WishList />
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
                    path:'/dashboard/products/details/:id',
                    element:<DashboardProductsDetails/>
                },
                  {
                    path:'/dashboard/products/review/:id',
                    element:<AllReviews/>
                },
                {
                    path:'/dashboard/products/update/:id',
                    element:<DashboardUpdateProducts/>
                }
            ]
        }
    ])
    return (
        <div><RouterProvider router={routes} /></div>
    )
}

export default AppRoutes