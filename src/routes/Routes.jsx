import { createBrowserRouter } from "react-router-dom";
import Main1 from "../layout/Main1";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Main1></Main1>,
        children:[
            {
                path:'/home',
                elemment:<Home></Home>
            },
            {
                path:'/blogs',
                elemment:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])
export default router;

