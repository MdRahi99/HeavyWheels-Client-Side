import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCategories from "../../Pages/Categories/AllCategories/AllCategories";
import Home from "../../Pages/Home/Home/Home";
import ErrorRoute from "../../Routes/ErrorRoute/ErrorRoute";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Contact from "../../Pages/Contact/Contact";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashBoardLayout";

import AllProducts from "../../Pages/Categories/AllProducts/AllProducts";

import MyOrders from "../../Pages/Dashboard/BuyerDashboard/MyOrders/MyOrders";

import MyBuyers from "../../Pages/Dashboard/SellerDashboard/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerDashboard/MyProducts/MyProducts";
import AddProducts from "../../Pages/Dashboard/SellerDashboard/AddProducts/AddProducts";

import AllBuyers from "../../Pages/Dashboard/AdminDashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminDashboard/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Dashboard/AdminDashboard/ReportedItems/ReportedItems";

import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

import Payment from "../../Pages/Dashboard/BuyerDashboard/MyOrders/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                loader: async({params}) => fetch(`https://heavy-wheels-server.vercel.app/products/${params.category_id}`) 
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            // Payment
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://heavy-wheels-server.vercel.app/orders/${params.id}`)
            },
            // Seller Section Routes
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            // Buyer Section Routes

            // Admin Section Routes
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
            // Admin Section Routes
        ]
    },
    {
        path: '*',
        element: <ErrorRoute></ErrorRoute>
    }
])

export default router;