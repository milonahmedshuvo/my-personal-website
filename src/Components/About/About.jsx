/* eslint-disable react/no-unescaped-entities */
import img from '../../images/mypic.jpg'


const About = () => {

  return (
    <div className='my-60'>

          <div>
            <h1 className='font-bold text-4xl text-center uppercase mt-10 mb-4 '>Who am i ...?</h1>
            <h4 className='text-center font-bold text-2xl uppercase  mt-3 mb-20'>A Passionate Frontend Web Developer</h4>
          </div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>


<div className=' '>
    <img className='w-full rounded-tr-[25%] rounded-bl-[25%]' src={img} alt="" />
</div>  


<div className='px-4'>
    <h1 className='text-3xl font-bold text-center mb-2'>About Me</h1>
    <p className='tracking-wide leading-relaxed '>
    Hi, I'm Milon Ahmed Shuvo, a passionate and detail-oriented Frontend Developer with expertise in building dynamic and responsive web applications. I specialize in creating clean, efficient, and scalable solutions using HTML, CSS, JavaScript, and TypeScript. I have extensive experience with modern frontend frameworks and libraries like React.js, Next.js, and Redux.
    </p>

    <p className='tracking-wide leading-relaxed mt-4 '>
    With a solid foundation in Node.js, Express, MongoDB, and Mongoose, I enjoy working on full-stack applications, particularly with the MERN stack. I am constantly learning and applying the latest trends in web development to ensure top-tier user experiences.
    </p>
    <p className='tracking-wide leading-relaxed mt-4 '>
    I love collaborating with teams, tackling complex problems, and turning ideas into seamless digital products.
    </p>

    <div className='border border-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 pl-5 py-4 textShadow'>
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
            <p>Dhaka, Bangladesh</p>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default About
