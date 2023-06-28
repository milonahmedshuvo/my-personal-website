import { useQuery } from '@tanstack/react-query';
import React from 'react'
import DashbordSingleProjects from './DashbordSingleProjects';

const DahsbordAllProjects = () => {
      
       const {data:allProjects=[], refetch}=useQuery({
        queryKey: ["allprojects"],
        queryFn: async () => {
            const res= await fetch("http://localhost:5000/allProjects");
            const data= await res.json()
            return data
        }
       })



    
  return (
    <div className='my-16'>


    <div className='my-14'>
       <h1 className='text-3xl text-center font-bold '>MY PROJECTS</h1>
    </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 ml-4'>
             {
                  allProjects.map((project, i) => <DashbordSingleProjects
                              key={i}
                              project={project}
                              refetch={refetch}
                                                  ></DashbordSingleProjects>)
           }
           </div>
     </div>
  )
}

export default DahsbordAllProjects;
