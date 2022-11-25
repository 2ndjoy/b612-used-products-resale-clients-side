import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blogs from "../Components/Blogs/Blogs";
import DisplayError from "../Components/DisplayError/DisplayError";
import Home from "../Components/Home/Home";
import Products from "../Components/Home/Products/Products";
import AddProduct from "../DashBoard/AddProduct/AddProduct";
import AllBuyers from "../DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../DashBoard/AllSellers/AllSellers";
import DashBoardLayout from "../DashBoard/DashBoardLayout";
import MyBuyers from "../DashBoard/MyBuyers/MyBuyers";
import Myorders from "../DashBoard/MyOrders/Myorders";
import MyProducts from "../DashBoard/MyProducts/MyProducts";
import ReportedItems from "../DashBoard/ReportedItems/ReportedItems";
import Main from "../Layout/Main";
import LogIn from "../LogInAndRegister/LogIn";
import Register from "../LogInAndRegister/Register";


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
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/*',
                element: <div>Nai re vai...</div>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/*',
                element: <div>Nai re vai...</div>
            }
        ]
    }
])


export default router;
