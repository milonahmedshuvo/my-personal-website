import React from 'react'
import my from '../../images/mypic.jpg'

const Banner = () => {


  return (
    <div className='mt-10'>
      

      <div className='flex justify-between '>

                 <div className=' w-full flex flex-col justify-center'>
                    <h1 className='text-7xl font-bold'>Milon Ahmed <span>Shuvo</span></h1>
                    <h4 className='mt-5 text-3xl '>MERN Stack Junior Web Developer</h4>


                    <button className="group mt-4 relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg font-bold shadow px-1">
                        <a
                            href="https://drive.google.com/file/d/1rGCGsM41DgZCwY2Z-GChdvue6Xky9Ckm/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-primary group-hover:text-white">
                                See Resume!
                            </span>
                        </a>
                    </button>
                 </div>



                 <div className=' w-full '>
                   <img className='w-2/3 mx-auto rounded-full' src={my} alt="" />
                 </div>
      </div>
     
    </div>
  )
}

export default Banner
