import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import DashbordLayout from "./Components/DashbordLayout/DashbordLayout";
import MakeProjects from "./Components/DashbordLayout/MakeProjects/MakeProjects";
 
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
    },

    {
        path: '/dashbord',
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: "/dashbord/p",
                element: <MakeProjects> </MakeProjects>
            }
        ]
    }


])