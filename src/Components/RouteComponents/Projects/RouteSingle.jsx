import React from 'react'







const RouteSingle = ({project}) => {
  const {categori, title, image, clientLink, serverLink, liveLink, technology, drescription } = project





  return (
    <div className='px-3 py-2 bg-[#3A2B71] rounded '>


    <div>
        <h1 className='text-3xl text-center font-bold'>{title}</h1>
         <p className='text-2xl text-center my-4'>{categori}</p>
     </div>
       

         {/* <div className='w-full '>
         
           <img className=' mx-auto' src={image} alt="" />
        </div>  */}



        <div className="w-full h-52 mt-5 overflow-hidden hover:overflow-hidden rounded-lg bg-white"> 
           
           <div className="w-full h-full bg-cover bg-no-repeat bg-animation" style={{backgroundImage: `url(${image})`, }} ></div>   


          </div>  















        
        <div className='mt-5'>
            {
             technology?.split(" ").map((el, i) => <span className='border border-blue-300 px-2 mx-1 rounded-lg'
             key={i}
             >{el} </span>)
            }
        </div>

             <div>
                 <p className='mt-6'>{drescription}</p>
             </div>



        <div className='mt-10 mb-3 flex justify-between  '>
           <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' target="_blank" href={clientLink}>Client Code</a>

           <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' target="_blank" href={clientLink}>Server Code</a>

           <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' target="_blank" href={clientLink}>Live Site</a>

        </div>
       
 </div>
  )
}

export default RouteSingle

