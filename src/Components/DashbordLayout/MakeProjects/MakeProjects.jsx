import React from 'react'

const MakeProjects = () => {

     const handleMakeProject = (event) => {
        // event.preventDefault()
        event.preventDefault()
         const categori = event.target.categori.value
         const title = event.target.title.value 
         const technology = event.target.technology.value
         const image = event.target.image.value 
         const clientLink= event.target.clientLink.value
         const serverLink= event.target.serverLink.value 
         const liveLink  = event.target.liveLink.value 
         const drescription = event.target.drescription.value 

         console.log(categori,title, technology, image, clientLink, serverLink, liveLink, drescription)


     }

  return (
    <div className='my-40 ml-6'>
       <h1 className='text-center text-3xl font-bold my-4 text-purple-500 '>Make projects </h1>


           <div>
               <form onSubmit={handleMakeProject}>
               <input type="text" placeholder="categori/backend/fortend name" name="categori" className="input input-bordered input-primary w-full my-2" />


               <input type="text" placeholder="title/project name" name="title" className="input input-bordered input-primary w-full my-2" />


               <input type="text" placeholder="technology" name="technology" className="input input-bordered input-primary w-full my-2" />



               <input type="text" placeholder="image url"  name="image" className="input input-bordered input-primary w-full my-2" />


               <input type="text" placeholder="clientLink" name="clientLink" className="input input-bordered input-primary w-full my-2" />


               <input type="text" placeholder="serverLink" name="serverLink" className="input input-bordered input-primary w-full my-2" />

               <input type="text" placeholder="liveLink" name="liveLink" className="input input-bordered input-primary w-full my-2" />


               <input type="text" placeholder="drescription" name="drescription" className="input input-bordered input-primary w-full my-2" />

                      



                      <input type="submit" value="Submit" className='bg-purple-500 px-4 py-1 mt-7 rounded  text-white w-1/2 mx-auto '  />
               </form>
           </div>
    </div>
  )
}

export default MakeProjects
