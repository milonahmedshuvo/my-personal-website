import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { createContextUser } from '../../Layout/ContextComponents'
import useAmdin from '../../Layout/useAmdin'

const Navber = () => {
      const {user,loading} = useContext(createContextUser)

      if(loading){
        return <h1>loading...</h1>
      }
      const [isAdmin] = useAmdin(user?.email)
      console.log("adminnnn", isAdmin)


 const manuItem = <>
          <li> <Link className='text-[#ffffff] hover:text-[#ffffff] text-lg'>HOME</Link> </li>

          <li> <Link to='/about' className='text-[#ffffff] hover:text-[#ffffff] text-lg'>ABOUT</Link> </li>

          <li> <Link to="/projects" className='text-[#ffffff] hover:text-[#ffffff] text-lg'>PROJECTS</Link> </li>

         
          <li> <Link to='/contact' className='text-[#ffffff] hover:text-[#ffffff] text-lg'>CONTACT</Link> </li>

          {
            isAdmin && <li> <Link to='/dashbord' className='text-[#ffffff] hover:text-[#ffffff] text-lg'>DASHBORD</Link> </li>
          }
         
 </>





  return (
    <div className="navbar  py-8  ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>


        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         
             {manuItem}

        </ul>



      </div>
      <a className="btn btn-ghost normal-case text-xl italic shadowColor ">Shuvo's Portfolio</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        
            {manuItem}
      </ul>
    </div>







    <div className="navbar-end ">

      <p className=" shadowColor  rounded-full border border-[#858792] px-12 py-3 hover:bg-[#1A103C] bg-[#1A103C] text-white text-lg ">HIRE ME</p>
    </div>
  </div>
  )
}

export default Navber
