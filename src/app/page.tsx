import HeroSection from './components/herosection';
import Skills from './components/skills';
import Navbar from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contactus';
import ScrollToTop from './components/scroll';
import Footer from './components/footer';



export default function Home(){
    return(
      <main>
       <Navbar/> 
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollToTop />
      </main>
    
    )
}