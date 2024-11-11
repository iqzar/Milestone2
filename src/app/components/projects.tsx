'use client'
import Image from 'next/image';
import w1 from '../public/w1.png';
import w2 from '../public/w2.png';
import w3 from '../public/w3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
   <div id="projects" className="bg-black px-4 sm:px-8">
  <div className="mt-20 pt-10 font-poppins text-center pb-10">
    <h2 className="text-3xl text-white">
      My <span className="font-bold">Projects</span>
    </h2>
  </div>

  {/* Projects container */}
  <div className="flex flex-col md:flex-row md:space-x-12 pb-5 md:justify-center items-center md:pt-5 md:pb-10 space-y-5 md:space-y-0">
    
    {/* First Project */}
    <motion.div
      className="text-white border bg-black px-5 py-4 border-green-200 rounded-xl shadow-lg w-full max-w-xs md:max-w-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.6 }}
    >
      <Image src={w3} alt="Pakistani Khaany" width={270} height={220} />
      <h3 className="text-lg font-semibold font-poppins mt-3">Pakistani Khaany</h3>
      <p className="text-sm mt-2 font-thin">
        A multi-page Pakistani food recipe website template built with Next.js and styled using Tailwind CSS offers a fast, responsive, smooth and dynamic user experience.
      </p>
      <Link href="https://milestone2-assignment-khany.vercel.app/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="w-3 h-3 mt-4 hover:w-4 hover:h-4" icon={faArrowUpRightFromSquare} />
      </Link>
    </motion.div>

    {/* Second Project */}
    <motion.div
      className="text-white border bg-black px-5 py-4 border-green-200 rounded-xl shadow-lg w-full max-w-xs md:max-w-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Image src={w1} alt="Figma To Web" width={270} height={220} />
      <h3 className="text-lg font-semibold font-poppins mt-3">Figma To Web</h3>
      <p className="text-sm mt-2 font-thin">
        Developed a pixel-perfect landing page that mirrors the Figma design, ensuring a seamless user experience and visual consistency. Utilized Next.js and Tailwind CSS.
      </p>
      <Link href="https://class-assignment-2-ecomerce.vercel.app/?vercelToolbarCode=RYMdeB6Oe5fhu24" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="w-3 h-3 mt-4 hover:w-4 hover:h-4" icon={faArrowUpRightFromSquare} />
      </Link>
    </motion.div>

    {/* Third Project */}
    <motion.div
      className="text-white border bg-black px-5 py-4 border-green-200 rounded-xl shadow-lg w-full max-w-xs md:max-w-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Image src={w2} alt="SAT Homemade Food" width={270} height={220} />
      <h3 className="text-lg font-semibold font-poppins mt-3">SAT Homemade Food</h3>
      <p className="text-sm mt-2 font-thin">
        Created a static, multi-page website for Sat Homemade Food, a fast-food brand, highlighting the menu, special offers, and customer reviews. It was designed for a responsive experience.
      </p>
      <Link href="https://sat-homemade-food.vercel.app/?vercelToolbarCode=4h2F_gRkoysVdWw" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="w-3 h-3 mt-4 hover:w-4 hover:h-4" icon={faArrowUpRightFromSquare} />
      </Link>
    </motion.div>

  </div>
</div>

  );
}

