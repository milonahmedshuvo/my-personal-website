import my from '../../images/mypic.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";



const Banner = () => {


  return (
    <div className='mt-10'>

      <div className='flex flex-col md:flex-row md:justify-between '>

        <div className=' w-full flex flex-col justify-center'>
          <h1 className='text-6xl font-semibold '>Milon Ahmed <span>Shuvo</span></h1>
          <h4 className='mt-5 text-3xl '>Frontend Developer</h4>






          <div className='flex items-center mt-8'>

            {/* <button className="group mt-4 textShadow relative h-12 w-48 overflow-hidden rounded-lg bg-[#4E4CFF] text-lg font-bold shadow px-1">
                        <a
                            href="https://drive.google.com/file/d/1arwbVVmXWauOkfOjFQ6wF0ngtcEXI7Gv/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-[#FFFFFF] group-hover:text-white">
                                See Resume!
                            </span>
                        </a>
                    </button> */}

            <div>
            <a href="https://drive.google.com/file/d/1arwbVVmXWauOkfOjFQ6wF0ngtcEXI7Gv/view?usp=sharing" 
           target="_blank"
            className="relative px-10 py-2 font-medium text-white group " rel="noreferrer">



              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#4E4CFF] group-hover:bg-[#2d2adf] group-hover:skew-x-12"></span>


              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#4E4CFF] group-hover:bg-[#2d2adf] group-hover:-skew-x-12"></span>

               <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#4E4CFF] -rotate-12"></span> 

              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#4E4CFF] -rotate-12"></span> 


              <span className="relative text-md text-white">Resume</span>
            </a>
            </div>



            <div className='flex items-center  gap-3 ml-6'>

              <div className='w-[40px] h-[40px] bg-[#4E4CFF] text-center flex justify-center items-center rounded-full '>
                <a className='' target="_blank" href="https://www.linkedin.com/in/milon-ahmed-shuvo-frontend" rel="noreferrer"> <FaLinkedin className="text-lg text-white "></FaLinkedin> </a>
              </div>

              <div className='w-[40px] h-[40px] bg-[#4E4CFF] text-center flex justify-center items-center rounded-full '>
                <a className='' target="_blank" href="https://github.com/milonahmedshuvo" rel="noreferrer"> <FaGithub className="text-xl text-white"></FaGithub> </a>
              </div>



            </div>

          </div>




        </div>



        <div className=' w-full mt-20 md:mt-0'>
          <img className='w-2/3 mx-auto rounded-full shadowColor' src={my} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Banner
