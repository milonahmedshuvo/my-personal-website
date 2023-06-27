import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SingleProjects from './SingleProjects';

const Projects = () => {
     const {data:allProjects=[], isLoading, refetch }=useQuery({
        queryKey:["projects"],
        queryFn: async ( ) => {
            const res = await fetch('http://localhost:5000/allProjects');
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

         <div className='flex justify-between gap-10'>
         {
            allProjects.map((project, i) => <SingleProjects
            key={i}
            project={project}
            ></SingleProjects>)
         }
         </div>
    </div>
  )
}

export default Projects
