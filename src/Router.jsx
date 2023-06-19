import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
 
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])