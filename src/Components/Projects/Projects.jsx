import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SingleProjects from './SingleProjects';
import { Link } from 'react-router-dom';

const Projects = () => {
     const {data:allProjects=[], isLoading, refetch }=useQuery({
        queryKey:["projects"],
        queryFn: async ( ) => {
            const res = await fetch('https://my-personal-website-flax-beta.vercel.app/limitProjects');
            const data = await res.json()
            return data
        }
     })

       refetch()

  return (
    <div className='my-40'>


           <div className='my-14'>
              <h1 className='text-3xl text-center font-bold '>MY PROJECTS</h1>
           </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
         {
            allProjects.map((project, i) => <SingleProjects
            key={i}
            project={project}
            ></SingleProjects>)
         }
         </div>




         <div className='flex justify-center '>
         <Link to='/projects'>
             <button className='text-xl bg-blue-400 text-white rounded px-2 py-1 my-12 text-center uppercase ' type="button">See All Projects</button>
         </Link>
         </div>    
    </div>
  )
}

export default Projects
