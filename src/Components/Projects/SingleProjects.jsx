import React from 'react'

const SingleProjects = ({project}) => {
   
    const {categori, title, image, clientLink, serverLink, liveLink, technology, drescription } = project
    




  return (
    <div className='px-3 py-2 bg-[#3A2B71] rounded '>


       <div>
           <h1 className='text-3xl text-center font-bold'>{title}</h1>
            <p className='text-2xl text-center my-4'>{categori}</p>
        </div>
          

           <div className='w-full '>
            <img className=' mx-auto' src={image} alt="" />
           </div>
           
           <div className='mt-5'>
               {
                technology?.split(" ").map((el, i) => <span className='border border-blue-300 px-2 mx-1 rounded-lg'
                key={i}
                >{el} </span>)
               }
           </div>



           <div className='mt-10 mb-3 flex justify-between  '>
              <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' href={clientLink}>Client Code</a>

              <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' href={clientLink}>Server Code</a>

              <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' href={clientLink}>Live Site</a>

           </div>
          
    </div>
  )
}

export default SingleProjects
