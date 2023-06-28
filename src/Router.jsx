import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import DashbordLayout from "./Components/DashbordLayout/DashbordLayout";
import MakeProjects from "./Components/DashbordLayout/MakeProjects/MakeProjects";
import Projects from "./Components/RouteComponents/Projects/Projects";
 
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Projects></Projects>
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
        ]  
    }

   


])