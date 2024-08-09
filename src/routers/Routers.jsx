import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Error from "../pages/Error/Error";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/categories.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/news/:id',
                element:<NewsDetails></NewsDetails>,
                loader:()=>fetch('/news.json')
            }
           
        ]
    }
])