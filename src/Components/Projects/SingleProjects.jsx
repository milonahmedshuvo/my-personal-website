import React from 'react'

const SingleProjects = ({project}) => {
   
    const {categori, title, image, clientLink, serverLink, liveLink, technology, drescription } = project
    




  return (
    <div className='px-3 py-2 bg-[#3A2B71] rounded textShadow '>


       <div>
           <h1 className='text-2xl text-center font-bold'>{title}</h1>
            <p className='text-xl text-center my-4'>{categori}</p>
        </div>
          



         
        <div className="w-full h-52 overflow-hidden  relative">
        
        <img
          src={image}
          alt="Hover Image"
          className="w-full h-auto transform transition-transform duration-1000 ease-linear hover:-translate-y-1/2"
        />
      </div>






           
           <div className='mt-5'>
               {
                technology?.split(" ").map((el, i) => <span className='border border-blue-300 px-2 mx-1 rounded-lg'
                key={i}
                >{el} </span>)
               }
           </div>



           <div className='mt-10 mb-3 flex justify-between  '>
              <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' href={clientLink} target="_blank" >Client Code</a>

              <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' href={serverLink} target="_blank" >Server Code</a>

              <a className='bg-blue-400 px-3 py-1 text-center text-white rounded-sm' href={liveLink} target="_blank" >Live Site</a>

           </div>
          
    </div>
  )
}

export default SingleProjects
