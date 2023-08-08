import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const DashbordLayout = () => {


  return (


    <div>
         <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">

          <Outlet></Outlet>

    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  





    </div> 
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      

      <li> <Link to='/dashbord' className='text-[#ffffff] hover:text-[#ffffff] text-lg'>Make Project</Link> </li>

      <li> <Link to='/dashbord/allProjects' className='text-[#ffffff] hover:text-[#ffffff] text-lg'>All Project</Link> </li>


    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashbordLayout
