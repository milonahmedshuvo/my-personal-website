import React, { useEffect } from 'react'
import { skillsData } from '../../assets/SkillsData'
import SkillsCard from './SkillsCard'
import ScrollCarousel from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css';






const Skills = () => {

  useEffect(()=> {
    new ScrollCarousel(".my-carousel", {
      autoplay: true
    });
    
  },[])


  return (
    <div className=' my-40 '>


         <h1 className='text-center font-bold text-3xl mt-16 mb-7'>Skills</h1>
         <h2 className='text-center font-bold text-2xl mt-4 mb-20 uppercase'>My skills progress so far</h2>


     <div className='my-carousel'>
    
         {
        skillsData.map((skill, i) => <SkillsCard
            key={i}
            skill={skill}
         ></SkillsCard>)
          }

      </div>  

    </div>
  )
}

export default Skills
