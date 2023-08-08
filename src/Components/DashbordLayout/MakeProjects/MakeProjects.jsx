import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'
import { json } from 'react-router-dom'



const MakeProjects = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


     const handleMakeProject = (data) => {
        // event.preventDefault()
        // event.preventDefault()
        //  const categori = event.target.categori.value
        //  const title = event.target.title.value 
        //  const technology = event.target.technology.value
        //  const image = event.target.image 
        //  const clientLink= event.target.clientLink.value
        //  const serverLink= event.target.serverLink.value 
        //  const liveLink  = event.target.liveLink.value 
        //  const drescription = event.target.drescription.value 

         console.log(data.image[0])
         const image = data.image[0]
         const formData= new FormData()
         formData.append("image",image)
         console.log("formData", formData)

            fetch("https://api.imgbb.com/1/upload?&key=fb70d1eaaaaf3643c06f16d2e654b7a0", {
                method:"POST",
                body: formData
            })
            .then((res) => res.json())
            .then((imageData) => {                
                if(imageData.success){
                    const image = imageData.data.url


                    const projectData = {
                        image,
                        categori: data.categori,
                        title: data.title,
                        technology: data.technology,
                        clientLink: data.clientLink,
                        serverLinkJ: data.serverLink,
                        liveLink: data.liveLink,
                        drescription:data.drescription
                    }

                    console.log(projectData)
                    toast.success("succful image host")
                }
            })
            .catch((err) => {
                console.log(err)
            })





















        // const makeprojectData = {
        //     categori,
        //     title,
        //     technology,
        //     image,
        //     clientLink,
        //     serverLink,
        //     liveLink, 
        //     drescription
        // }

        //    fetch('http://localhost:5000/makeProject', {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body:JSON.stringify(makeprojectData) 
        //    })
        //    .then((res)=> res.json())
        //    .then((data)=> {
        //     console.log(data)
        //     toast.success("Succesful Add Project !")
        //    })
        //    .catch((err) => {
        //     console.log(err)
        //     toast.error("not add project !")
        //    })




        

     }




  return (
    <div className='my-40 ml-6'>
       <h1 className='text-center text-3xl font-bold my-4 text-purple-500 '>Make projects </h1>


           <div>
               <form onSubmit={handleSubmit(handleMakeProject)}>

                
               <input type="text" placeholder="categori/backend/fortend name" className="input input-bordered input-primary w-full my-2" {...register("categori")} />


               <input type="text" placeholder="title/project name" className="input input-bordered input-primary w-full my-2" {...register("title")} />


               <input type="text" placeholder="technology" className="input input-bordered input-primary w-full my-2" {...register("technology")} />



               {/* <input type="text" placeholder="image url"   className="input input-bordered input-primary w-full my-2" /> */}

               <input type="file" className="file-input file-input-bordered w-full my-2" {...register("image")} />




               <input type="text" placeholder="clientLink" className="input input-bordered input-primary w-full my-2" {...register("clientLink")} />


               <input type="text" placeholder="serverLink" className="input input-bordered input-primary w-full my-2" {...register("serverLink")} />


               <input type="text" placeholder="liveLink" className="input input-bordered input-primary w-full my-2" {...register("liveLink")} />


               <input type="text" placeholder="drescription" className="input input-bordered input-primary w-full my-2" {...register("drescription")} />

                      



                      <input type="submit" value="Submit" className='bg-purple-500 px-4 py-1 mt-7 rounded  text-white w-1/2 mx-auto '  />
               </form>
           </div>
    </div>
  )
}

export default MakeProjects
