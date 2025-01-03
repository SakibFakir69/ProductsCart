import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layout/Mainlayouts";
import Product from "../Product";





export const route = createBrowserRouter([
    {
        path:'/',
        element : <Mainlayouts/>,
        children:[
            {
                path:'/',
                element: <Product/>
            }
        ]
    }
])