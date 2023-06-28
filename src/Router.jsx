import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import DashbordLayout from "./Components/DashbordLayout/DashbordLayout";
import MakeProjects from "./Components/DashbordLayout/MakeProjects/MakeProjects";
import Projects from "./Components/RouteComponents/Projects/Projects";
import DahsbordAllProjects from "./Components/RouteComponents/DashbordAllProjects/DahsbordAllProjects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
 
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
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {   
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: '/dashbord',
                element: <DashbordLayout></DashbordLayout>,
                children: [
                    {
                        path: "/dashbord/p",
                        element: <MakeProjects> </MakeProjects>
                    },
                    {
                        path: "/dashbord/allProjects",
                        element: <DahsbordAllProjects></DahsbordAllProjects>
                    }
                ]
            }
        ]  
    }

   


])