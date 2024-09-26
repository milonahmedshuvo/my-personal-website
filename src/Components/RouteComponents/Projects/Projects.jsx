import { useQuery } from '@tanstack/react-query'
import RouteSingle from './routeSingle';

const Projects = () => {

     const {data:projects=[], } = useQuery({
        queryKey: ['projects'],
        queryFn: async ( ) => {
               const res = await fetch("https://my-parsonal-website-server.vercel.app/allProjects");
               const data = await res.json()
               return data
        }
     })


  return (
    <div className='my-16'>


    <div className='my-14'>
       <h1 className='text-3xl text-center font-bold '>MY PROJECTS</h1>
    </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
             {
                  projects.map((project, i) => <RouteSingle
                              key={i}
                              project={project}
                                                  ></RouteSingle>)
           }
           </div>


     </div>
  )
}

export default Projects
