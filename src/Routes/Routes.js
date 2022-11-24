import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../LogInAndRegister/LogIn";
import Register from "../LogInAndRegister/Register";


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
            }
        ]
    }
])


export default router;
