import { createBrowserRouter } from "react-router-dom";
import Main1 from "../layout/Main1";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main1></Main1>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/chefdetails/:id',
               
                element:<ChefDetails></ChefDetails>,
                loader:async({params})=>{
                    const res=await fetch("http://localhost:5000/chefs");
                    const data=await res.json();
                    const chefs=data.find(chef=>chef.id == params.id)
                    return chefs;
                  }
                  },
         {
                path:'/blogs',
                element:<Blogs></Blogs>
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

