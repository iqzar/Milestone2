'use client'
import bg from '../public/c2.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';



const aboutVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the view
    visible: { opacity: 1, y: 0 }, // Move to the normal position
  };

  

export default function AboutMe() {
    return (
            <div>
            <div className=''>
            <div><Link href='/'><FontAwesomeIcon className='h-8 w-8 md:mt-1 mt-3 text-green-200 md:pl-5 pl-2' icon={faCircleLeft} /></Link></div>
            <h1 className="mt-3 flex justify-center text-3xl md:text-4xl font-poppins font-semibold animate-zoomIn">
                All <span className="border-b-4 border-green-200 mx-2 animate-zoomIn">About Me</span>
            </h1></div>
            

            <motion.div
        className="flex flex-col md:flex-row items-center md:items-start md:gap-20 md:ml-20 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={aboutVariants}
        transition={{ duration: 0.8 }}
      >
                <Image
                    src={bg}
                    width={300}
                    height={300}
                    alt="image2"
                    className="w-60 h-60 md:w-[300px] md:h-[300px] object-cover"
                />
                <div className="md:ml-10 mt-6 md:mt-0">
                    <h2 className="text-4xl md:text-5xl">HELLO!</h2>
                    <p className="text-xs leading-loose mt-4 font-londrina w-full md:w-260 md:pr-10 pr-5 md:pl-0 pl-5" >
                        I am an enthusiastic learner currently pursuing an IT course, building on my strong foundation in commerce, where I completed my master s degree. My diverse background equips me with a unique perspective on technology and business, enabling me to blend analytical thinking with creative problem-solving. Beyond my academic pursuits, I am passionate about creativity and enjoy making DIY projects that reflect my innovative spirit. Additionally, I have cultivated skills in calligraphy and painting, which allow me to express myself artistically and appreciate the beauty in detail and design. I thrive in environments that challenge me to grow and push the boundaries of my creativity while integrating technology into my projects.
                    </p>
                </div>
            </motion.div>


   
            
        </div>


    );
}
