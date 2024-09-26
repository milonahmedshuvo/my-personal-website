import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'



const MakeProjects = () => {
    const { register, handleSubmit } = useForm();


     const handleMakeProject = (data) => {
         

         console.log("image file",  data.image[0])
        
         const formData = new FormData();
         formData.append('image', data.image[0]);

         
         console.log("formData", formData)




         

            fetch("https://api.imgbb.com/1/upload?&key=1e1cb35e45fc37d4bfe6bd8a3ed195cc", {
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
                        serverLink: data.serverLink,
                        liveLink: data.liveLink,
                        drescription:data.drescription
                    }

                    console.log(projectData)
                    seveProjectData(projectData)
                    toast.success("succful image host")
                }
            })
            .catch((err) => {
                console.log(err)
            })







        function seveProjectData (project){
            fetch('https://my-personal-website-flax-beta.vercel.app/makeProject', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(project) 
               })
               .then((res)=> res.json())
               .then((data)=> {
                console.log(data)
                toast.success("Succesful Add Project !")
               })
               .catch((err) => {
                console.log(err)
                toast.error("not add project !")
               })

        } 





     }




  return (
    <div className='my-10 ml-6'>
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

                      



                      <input type="submit" value="Submit" className='bg-purple-500 px-4 py-1 mt-7 rounded  text-white w-1/2 mx-auto '/>
               </form>
           </div>
    </div>
  )
}

export default MakeProjects
