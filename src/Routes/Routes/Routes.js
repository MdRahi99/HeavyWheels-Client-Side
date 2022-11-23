import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCategories from "../../Pages/AllCategories/AllCategories";
import Home from "../../Pages/Home/Home/Home";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Contact from "../../Pages/Contact/Contact";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashBoardLayout";

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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>
    }
])

export default router;