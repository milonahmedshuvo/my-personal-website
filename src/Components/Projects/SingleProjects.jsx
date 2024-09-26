/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */


const SingleProjects = ({ project }) => {

  // eslint-disable-next-line react/prop-types
  const {  title, image, clientLink, serverLink, liveLink, technology, } = project





  return (
    <div className='p-2 flex rounded-xl flex-col justify-between'>


     <div>        
      <div className="w-full h-52 overflow-hidden  relative">
        <img
          src={image}
          alt="Hover Image"
          className="w-full h-auto transform transition-transform duration-1000 ease-linear hover:-translate-y-1/2 rounded-sm hover:rounded-sm"
        />
      </div>
         
         <p className="mt-3 ">Name : {title}</p>

      <div className='mt-2'>
        {
          technology?.split(" ").map((el, i) => <span className='border border-white px-2  my-7 mx-1 rounded-lg '
            key={i}
          >{el} </span>)
        }
      </div>

      </div>

      <div className='mt-10 mb-3 flex justify-between  '>
        <a className='bg-[#4E4CFF] hover:text-white px-3 py-1 text-center text-white  rounded-sm' href={clientLink} target="_blank" >Client Code</a>

        <a className='bg-[#4E4CFF] hover:text-white px-3 py-1 text-center text-white rounded-sm' href={serverLink} target="_blank" >Server Code</a>

        <a className='bg-[#4E4CFF] hover:text-white px-3 py-1 text-center text-white rounded-sm' href={liveLink} target="_blank" >Live Site</a>

      </div>




    </div>
  )
}

export default SingleProjects
