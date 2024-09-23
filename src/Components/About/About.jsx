import img from '../../images/mypic.jpg'


const About = () => {

  return (
    <div className='my-60'>

          <div>
            <h1 className='font-bold text-4xl text-center uppercase mt-10 mb-4'>Who am i ...?</h1>
            <h4 className='text-center font-bold text-2xl  mt-3 mb-20'>A Passionate Developer Who Loves to Code</h4>
          </div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>


<div className=' '>
    <img className='w-full rounded-tr-[25%] rounded-bl-[25%]' src={img} alt="" />
</div>  


<div className=' p-4'>
    <h1 className='text-3xl font-bold text-center mb-10'>About Me</h1>
    <p className='tracking-wide leading-relaxed '>I am an enthusiastic and self-motivated full-stack web developer with excellent knowledge and experience. I have already developed more than 15 projects using HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript, and ReactJs. I have also knowledge with working experience in full-stack development using Nodejs, Expressjs, MongoDB, Firebase, and netlify. I can take on challenges in a new environment to develop new skills. I can take the level of accuracy concerning the quality of the work with attention to detail. I want to build my career on this job because I love this job</p>

    <div className='border border-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 pl-5 py-4 textShadow'>
        <div>
            <h1>Name</h1>
            <p>Milon Ahmed Shuvo</p>
        </div>

        <div>
            <h1>Phone</h1>
            <p>01744 182870</p>
        </div>

        <div>
            <h1>Email</h1>
            <p>milonahmedshuvo01@gmail.com</p>
        </div>

        <div>
            <h1>Address</h1>
            <p>Bogra,Bangladesh</p>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default About
