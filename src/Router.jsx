import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import DashbordLayout from "./Components/DashbordLayout/DashbordLayout";
import MakeProjects from "./Components/DashbordLayout/MakeProjects/MakeProjects";
import Projects from "./Components/RouteComponents/Projects/Projects";
import DahsbordAllProjects from "./Components/RouteComponents/DashbordAllProjects/DahsbordAllProjects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Layout/Login";
import SingUp from "./Layout/SingUp";
import ErrorPage from "./Layout/ErrorPage";
import ProjectDatails from "./Components/Projects/ProjectDatails";
 
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage/>,
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
                path: '/projectsDatails/:id',
                element: <ProjectDatails> </ProjectDatails>,
                // loader: async ({params}) => fetch(`http://localhost:5000/project/${params.id}`)
            },
            {
                path: "/about",
                element: <About></About>
            },
            {   
                path: "/contact",
                element: <Contact></Contact>
            },
            {   path: "/login",
                element: <Login></Login>
            },
            {
                path:"/singup",
                element: <SingUp></SingUp>
            }, 
            {
                path: '/dashbord',
                element: <DashbordLayout></DashbordLayout>,
                children: [
                    {
                        path: "/dashbord",
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