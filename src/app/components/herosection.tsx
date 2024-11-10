import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faDiscord,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function HeroSection() {
    return(
        <main>
            <div className=' font-poppins md:mt-5 mt-5 ml-5 mr-8 md:ml-24 md:mr-24'>
        <div className=' md:mt-28'>
          <h1 className='md:text-[100px] text-3xl font-pt'>WELCOME<span className='font-pt text-6xl'>.</span></h1>
          <p className='text-xs mt-10 leading-loose h-2/4 md:w-3/4' >I am Iqra Khizar, a beginner front-end developer with a passion for creating websites using Next.js, Tailwind CSS, and TypeScript. I focus on building responsive and modern interfaces, always aiming for clean and efficient code. I love learning new technologies and applying them in projects to improve both functionality and design.</p>
          <p className='text-xs mt-5 leading-loose h-2/4 md:w-3/4' ><p>
  I am a creative at heart, with a love for DIY projects, calligraphy, and painting. These passions inspire my work, helping me bring a unique perspective to front-end development.
</p>
</p>
        
        <div className='flex md:justify-between gap-3' >
          <button className="md:ml-0 mb-6 mt-10 text-white hover:text-white md:text-sm text-xs bg-black md:h-8 md:w-24 h-6 w-20 border-2 border-green-200 hover:border-green-200 hover:bg-slate-900">
    <Link href='#projects'>Check work</Link>
</button>
        <div className=' flex md:flex-row gap-2 md:ml-12 ml- mt-8 justify-end'>

        <div className="flex items-center justify-center w-8 h-8 bg-black hover:w-10 hover:h-10 rounded-full border-2 border-green-200">
      <a href='https://www.linkedin.com/in/iqra-ali-0972a7179/'><FontAwesomeIcon className='w-4 h-4 text-white' icon={faLinkedin} /></a>
      </div>
      <div className="flex items-center justify-center w-8 h-8 bg-black hover:w-10 hover:h-10 rounded-full border-2 border-green-20">
      <FontAwesomeIcon className='w-4 h-4 text-white' icon={faDiscord} />
      </div>
      <div className="flex items-center justify-center w-8 h-8 bg-black hover:w-10 hover:h-10 rounded-full border-2 border-green-200">
      <a href='https://github.com/iqzar'><FontAwesomeIcon className='w-4 h-4 text-white' icon={faGithub} /></a>
      </div>
      <div className="flex items-center justify-center w-8 h-8 bg-black hover:w-10 hover:h-10 rounded-full border-2 border-green-200">
      <a href='mailto:iqraa7191@gmail.com'> <FontAwesomeIcon className='w-4 h-4 text-white' icon={faEnvelope}/></a>
      </div>

      </div>
      </div>
      </div>
      </div>
     
        </main>
    )
}
