import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCategories from "../../Pages/Categories/AllCategories/AllCategories";
import Home from "../../Pages/Home/Home/Home";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Contact from "../../Pages/Contact/Contact";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashBoardLayout";

import AllProducts from "../../Pages/Categories/AllProducts/AllProducts";
import MyOrders from "../../Pages/Dashboard/BuyerDashboard/MyOrders/MyOrders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <AllCategories></AllCategories>
            },
            {
                path: '/products/:category_id',
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                loader: async({params}) => fetch(`http://localhost:5000/products/${params.category_id}`) 
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])

export default router;