/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";




const ProjectDatails = () => {    
const { id } = useParams();
// console.log('id', id)



const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


console.log(product)


useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/project/${id}`);
      
      const projectData  = await response.json();
      setProduct(projectData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]); // Runs whenever productId changes





if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}

if (!product) {
  return <p>No product found.</p>;
}
     


const {  title, image, clientLink, serverLink, liveLink, technology, drescription } = product





  return (
    <div className='p-2 flex rounded-xl flex-col justify-between mb-60'>


    <div>        
     <div className="w-full h-80 overflow-hidden  relative">
       <img
         src={image}
         alt="Hover Image"
         className="w-full h-auto transform transition-transform duration-1000 ease-linear hover:-translate-y-1/2 rounded-sm hover:rounded-sm"
       />
     </div>
        
        <p className="mt-3 ">Name : {title}</p>

     <div className='my-2'>
       {
         technology?.split(" ").map((el, i) => <span className='border border-white px-2  my-7 mx-1 rounded-lg '
           key={i}
         >{el} </span>)
       }
     </div>


     <p>{drescription}</p>

     </div>

     <div className='mt-10 mb-3 flex justify-between  '>
       <a className='bg-[#4E4CFF] hover:text-white px-3 py-1 text-center text-white  rounded-sm' href={clientLink} target="_blank" >Client Code</a>

       <a className='bg-[#4E4CFF] hover:text-white px-3 py-1 text-center text-white rounded-sm' href={serverLink} target="_blank" >Server Code</a>

       <a className='bg-[#4E4CFF] hover:text-white px-3 py-1 text-center text-white rounded-sm' href={liveLink} target="_blank" >Live Site</a>

     </div>




   </div>
  )
}

export default ProjectDatails