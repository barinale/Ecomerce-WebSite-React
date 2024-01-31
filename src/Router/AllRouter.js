import { createBrowserRouter } from "react-router-dom";
import { MyCart } from "../views/MyCart";
import App from "../App";
import { ListProduct } from "../views/ListProduct";

export const Routers = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
            path:'/Product',
            element:<ListProduct/>
            },
            {
                path:'/Cart',
                element:<MyCart />
            }
        ]
    }
])