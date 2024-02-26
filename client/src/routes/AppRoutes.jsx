import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Dashboard from '../dashboard/pages/Dashboard'
import DashboardBody from '../dashboard/pages/DashboardBody'
import AddProducts from '../dashboard/pages/AddProducts'
import DashboardProducts from '../dashboard/pages/DashboardProducts'
import DashboardProductsDetails from '../dashboard/pages/DashboardProductsDetails'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'
import DashboardUpdateProducts from '../dashboard/pages/DashboardUpdateProducts'
import AllReviews from '../dashboard/pages/AllReview'
import WishList from '../pages/WishList'
import { SecureRoute } from './SecureRoute'
import DashboardAdminProfile from '../dashboard/pages/DashboardAdminProfile'
import DashboardAllUsers from '../dashboard/pages/DashboardAllUsers'
import ProductRecommendationForm from '../pages/ProductRecommendationForm'
const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>;



const AppRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path:'/home',
            element: secureRouteWrapper(<HomePage />),
        },
        {
            path:'/home/cart',
            element: secureRouteWrapper(<CartPage />)
        },
        {
            path: '/home/details/:id',
            element:secureRouteWrapper(<ProductDetails/>)
        },
        {
            path:'/home/products/review/:id',
            element:<AllReviews/>
        },
        {
            path:'/home/wishList',
            element: secureRouteWrapper(<WishList />)
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

                    path:'/dashboard/products/:id',
                    element:<DashboardProductsDetails/>
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
        },
        {
            path:'/recommendation-form',
            element: <ProductRecommendationForm />
            
        },
      


    ])
    return (
        <div><RouterProvider router={routes} /></div>
    )
}

export default AppRoutes
