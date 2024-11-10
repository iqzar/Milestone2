
'use client'
import { faLightbulb, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};



export default function Contact(){
    return(
        <main id="contactus">


<h2 className="flex justify-center text-2xl md:text-3xl mt-20 font-chakra animate-zoomIn">Why choose me?</h2>


            
<div className= " md:ml-10 md:mr-10 flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-20 mt-12 mb-24 text-center">
<motion.div
className="w-full md:w-72 h-auto"
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={cardVariants}
transition={{ duration: 0.6 }}>
        <FontAwesomeIcon className="h-8 w-8 text-green-200 mb-3 ml-5" icon={faUser} />
        <h3 className="text-sm font-semibold font-poppins">User-Centric Design Expertise</h3>
        <p className="text-xs font-londrina mt-3">
            I focus on creating responsive websites that prioritize user experience. With expertise in Next.js and design tools.
        </p>
        </motion.div>

        <motion.div
className="w-full md:w-72 h-auto"
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={cardVariants}
transition={{ duration: 0.6 }}>

        <FontAwesomeIcon className="h-8 w-8 text-green-200 mb-3 ml-5" icon={faPalette} />
        <h3 className="text-sm font-semibold font-poppins">Creative with Technical Precision</h3>
        <p className="text-xs font-londrina mt-3">
            My blend of creativity and technical skills allows me to design functional and visually appealing websites.
        </p>                
        </motion.div>


 
        <motion.div
className="w-full md:w-72 h-auto"
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={cardVariants}
transition={{ duration: 0.6 }}>
        <FontAwesomeIcon className="h-8 w-8 text-green-200 mb-3 ml-5" icon={faLightbulb} />
        <h3 className="text-sm font-semibold font-poppins">Continuously Learning</h3>
        <p className="text-xs font-londrina mt-3">
            I embrace adaptability and continuous learning in technology. By exploring new tools and frameworks.
        </p>
        </motion.div>
</div>




        <div className='flex md:flex-row flex-col justify-center md:gap-80 font-poppins md:mt-5 md:mb-10'>

        
        <h2 className= "animate-slideInRight font-semibold md:ml-0 ml-20 mt-5 text-3xl tracking-wide">Lets talk about<br/>your project</h2>

        <button className="md:ml-0 ml-28 mb-6 mt-10 bg-transparent text-black hover:text-white text-sm font-semibold h-8 w-24 border border-black hover:border-green-200 hover:bg-slate-900">
    <Link href='/contact'>Contact Us</Link>
</button>

           
      
        












        </div>
        </main>
    )
}