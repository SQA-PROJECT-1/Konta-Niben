import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Dashboard from '../dashboard/pages/Dashboard'
import DashboardBody from '../dashboard/pages/DashboardBody'
import AddProducts from '../dashboard/pages/AddProducts'
import DashboardProducts from '../dashboard/pages/DashboardProducts'
import DashboardProductsDetails from '../dashboard/pages/DashboardProductsDetails'
import CartPage from '../pages/CartPage'
import DashboardUpdateProducts from '../dashboard/pages/DashboardUpdateProducts'
import AllReviews from '../dashboard/pages/AllReview'
import WishList from '../pages/WishList'
import { SecureRoute } from './SecureRoute'
import DashboardAdminProfile from '../dashboard/pages/DashboardAdminProfile'
import DashboardAllUsers from '../dashboard/pages/DashboardAllUsers'


const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>;

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
            path:'/cart',
            element: <CartPage />
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
                  element: secureRouteWrapper(<DashboardBody />)
                },
                {
                    path: '/dashboard/addProducts',
                    element: secureRouteWrapper(<AddProducts/>)
                },
                {
                    path: '/dashboard/products',
                    element: secureRouteWrapper(<DashboardProducts/>)
                },
                {
                    path:'/dashboard/products/details/:id',
                    element:secureRouteWrapper(<DashboardProductsDetails/>)
                },
                  {
                    path:'/dashboard/products/review/:id',
                    element:<AllReviews/>
                },
                {
                    path:'/dashboard/products/update/:id',
                    element:secureRouteWrapper(<DashboardUpdateProducts/>)
                },
                {
                    path:'/dashboard/adminProfile',
                    element:secureRouteWrapper(<DashboardAdminProfile/>)
                },
                {
                    path:'/dashboard/allUsers',
                    element:secureRouteWrapper(<DashboardAllUsers/>)
                }

            ]
        }
    ])
    return (
        <div><RouterProvider router={routes} /></div>
    )
}

export default AppRoutes
