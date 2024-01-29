import { createBrowserRouter } from "react-router-dom";
import { MyCart } from "../views/MyCart";
import App from "../App";

export const Routers = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/Cart',
                element:<MyCart />
            }
        ]
    }
])