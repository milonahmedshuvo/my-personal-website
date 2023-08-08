import React from "react";
import { FaGithub,FaLinkedin,FaFacebook } from "react-icons/fa";
import dev from '../../images/developer.png'



const Footer = () => {
  return (
   <div className="my-20">
     <footer className="footer  text-neutral-content">
      <div>
        
        <p>
          <span className="text-lg">Milon Ahmed Shuvo.</span>
          <br />
          Providing Web Devepment Service.
        </p>
      </div>
      <div>
        <span className="text-white text-xl">Social</span>
        <div className="grid grid-flow-col gap-4">
         
            
                 <a  target="_blank" href="https://www.facebook.com/milon.ahmedshuvo.5/"> <FaFacebook className="text-2xl"></FaFacebook> </a>
                 <a target="_blank" href="https://www.linkedin.com/in/milon-ahmed-shuvo/"> <FaLinkedin className="text-2xl"></FaLinkedin> </a>
                 <a target="_blank" href="https://github.com/milonahmedshuvo"> <FaGithub className="text-2xl "></FaGithub> </a>
           


         
        </div>
      </div>
    </footer>



    <h1 className="text-center text-white mt-20">Copyright © 2023 - All right reserved by Milon Ahmed Shuvo</h1>
   </div>

  );
};

export default Footer;
