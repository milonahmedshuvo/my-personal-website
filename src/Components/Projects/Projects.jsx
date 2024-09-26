import { useQuery } from '@tanstack/react-query'
import SingleProjects from './SingleProjects';
import { Link } from 'react-router-dom';

const Projects = () => {
     const {data:allProjects=[], refetch }=useQuery({
        queryKey:["projects"],
        queryFn: async ( ) => {
            const res = await fetch('https://my-parsonal-website-server.vercel.app/allProjects');
            const data = await res.json()
            return data
        }
     })

       refetch()

  return (
    <div className='my-20'>


           <div className='my-14'>
              <h1 className='text-2xl text-center font-semibold '>MY PROJECTS</h1>
           </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
         {
            allProjects.slice(0,6).map((project, i) => <SingleProjects
            key={i}
            project={project}
            ></SingleProjects>)
         }
         </div>




         <div className='flex justify-center '>
         <Link to='/projects'>
             <button className='text-md bg-[#4E4CFF] text-white rounded px-2 py-1 my-5 text-center ' type="button">See All Projects</button>
         </Link>
         </div>    
    </div>
  )
}

export default Projects
