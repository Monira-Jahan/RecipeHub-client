import { createBrowserRouter } from "react-router-dom";
import Main1 from "../layout/Main1";
import Home from "../pages/Home/Home/Home";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Main1></Main1>,
        children:[
            {
                path:'/',
                elemment:<Home></Home>
            }
        ]
    }
])
export default router;

