import my from '../../images/mypic.jpg'
import { FaGithub,FaLinkedin  } from "react-icons/fa";



const Banner = () => {


  return (
    <div className='mt-10'>
      
      <div className='flex flex-col md:flex-row md:justify-between '>

                 <div className=' w-full flex flex-col justify-center'>
                    <h1 className='text-6xl font-semibold '>Milon Ahmed <span>Shuvo</span></h1>
                    <h4 className='mt-5 text-3xl '>Frontend Developer</h4>


                   <div className='flex items-center'>

                   <button className="group mt-4 textShadow relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg font-bold shadow px-1">
                        <a
                            href="https://drive.google.com/file/d/1arwbVVmXWauOkfOjFQ6wF0ngtcEXI7Gv/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-red-500 group-hover:text-white">
                                See Resume!
                            </span>
                        </a>
                    </button>


                    <div className='flex items-center mt-4 '>
                    <a className='ml-3' target="_blank" href="https://www.linkedin.com/in/milon-ahmed-shuvo-frontend"> <FaLinkedin className="text-2xl "></FaLinkedin> </a>
                 <a className='ml-2' target="_blank" href="https://github.com/milonahmedshuvo"> <FaGithub className="text-2xl "></FaGithub> </a>
                    </div>
                   </div>



                    
                 </div>



                 <div className=' w-full mt-20 md:mt-0 '>
                   <img className='w-2/3 mx-auto rounded-full shadowColor' src={my} alt="" />
                 </div>
      </div>
     
    </div>
  )
}

export default Banner
