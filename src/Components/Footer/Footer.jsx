import React, { useContext } from "react";
import { FaGithub,FaLinkedin,FaFacebook } from "react-icons/fa";
import dev from '../../images/developer.png'
import { createContextUser } from "../../Layout/ContextComponents";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";



const Footer = () => {
     const {user,logout} = useContext(createContextUser)

        const userLogout = () =>{
            logout()
            .then((data)=>{
              toast.success("logout success!")
            })
            .catch((err)=>{
              console.log(err)
              toast.error("logout filed")
            })
        }



  return (
   <div className="my-20">
     <footer className="footer  text-neutral-content ">
      <div className="ml-10">
        
        <p className="">
          <span className="text-lg">Milon Ahmed Shuvo.</span>
          <br />
          Providing Web Devepment Service.
        </p>

         {
          user?.email? <Link onClick={userLogout} >logout</Link>  :  <Link to='/login'>login</Link>
         }  



      </div>
      <div className="ml-10">
        <span className="text-white text-xl">Social</span>
        <div className="grid grid-flow-col  gap-4">
         
            
                 <a  target="_blank" href="https://www.facebook.com/milon.ahmedshuvo.5/"> <FaFacebook className="text-2xl"></FaFacebook> </a>
                 <a target="_blank" href="https://www.linkedin.com/in/milon-ahmed-shuvo/"> <FaLinkedin className="text-2xl"></FaLinkedin> </a>
                 <a target="_blank" href="https://github.com/milonahmedshuvo"> <FaGithub className="text-2xl "></FaGithub> </a>
           


         
        </div>
      </div>
    </footer>



    <h1 className="text-center text-sm md:text-lg text-white mt-20">Copyright © 2023 - All right reserved by Milon Ahmed Shuvo</h1>
   </div>

  );
};

export default Footer;
