import Banner from '../Banner/Banner'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'
import SkillsCarousel from '../Modarnskills/Modarnskills'



const Home = () => {


  return (
    <div>
      <Banner></Banner>
      <About></About>
      <SkillsCarousel/>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Home
