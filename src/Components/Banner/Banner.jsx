import React from 'react'
import my from '../../images/mypic.jpg'

const Banner = () => {


  return (
    <div className='mt-10'>
      

      <div className='flex justify-between'>

                 <div className=' w-full flex flex-col justify-center'>
                    <h1 className='text-7xl font-bold'>Milon Ahmed <span>Shuvo</span></h1>
                    <h4 className='mt-4 text-3xl '>MERN Stack Junior Web Developer</h4>
                 </div>



                 <div className=' w-full '>
                   <img className='w-2/3 mx-auto rounded-full' src={my} alt="" />
                 </div>
      </div>
     
    </div>
  )
}

export default Banner
