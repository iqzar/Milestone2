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
    <div id="projects" className="bg-black">
      <div className="mt-20 pt-10 bg-black font-poppins">
        <h2 className="flex justify-center text-3xl text-white">
          My <span className="font-bold">Projects</span>
        </h2>
      </div>

      {/* Projects container */}
      <div className="bg-black flex md:flex-row flex-col md:space-x-12 md:justify-center md:pt-20 md:pb-10">
        
        {/* First Project */}
        <motion.div
          className="text-white border bg-black pl-5 pr-5 pt-3 pb-4 border-green-200 rounded-lg shadow dark:bg-black dark:border-gray-700 w-auto md:ml-0 md:mr-0 ml-10 mr-10 mb-5 mt-5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.6 }}
        >
          <Image src={w3} alt="logo" width={240} height={220} />
          <h3 className="text-lg font-semibold font-poppins mb-1 mt-3 ml-6">Pakistani Khaany</h3>
          <p className="text-xs w-60 h-22 font-thin">
            A multi-page Pakistani food recipe website template built with Next.js and styled using Tailwind CSS offers a fast, responsive, and dynamic user experience.
          </p>
          <Link href="https://milestone2-assignment-khany.vercel.app/" target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon className="w-3 h-3 mt-4 hover:w-4 hover:h-4" icon={faArrowUpRightFromSquare} />
</Link>
        </motion.div>

        {/* Second Project */}
        <motion.div
          className="text-white border bg-black pl-5 pr-5 pt-3 pb-4 border-green-200 rounded-lg shadow dark:bg-black dark:border-gray-700 w-auto md:ml-0 md:mr-0 ml-10 mr-10 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src={w1} alt="logo" width={240} height={220} />
          <h3 className="text-lg font-semibold font-poppins mb-1 mt-3 ml-6">Figma To Web</h3>
          <p className="text-xs w-60 h-22 font-thin">
          Developed a pixel-perfect landing page that mirrors the Figma design, ensuring a seamless user experience and visual consistency. Utilized Next.js and Tailwind CSS.
          </p>
          <Link href="https://class-assignment-2-ecomerce.vercel.app/?vercelToolbarCode=RYMdeB6Oe5fhu24" target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon className="w-3 h-3 mt-4 hover:w-4 hover:h-4" icon={faArrowUpRightFromSquare} />
</Link>
        </motion.div>

        {/* Third Project */}
        <motion.div
          className="text-white border bg-black pl-5 pr-5 pt-3 pb-4 border-green-200 rounded-lg shadow dark:bg-black dark:border-gray-700 w-auto md:ml-0 md:mr-0 ml-10 mr-10 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image src={w2} alt="logo" width={240} height={220} />
          <h3 className="text-lg font-semibold font-poppins mb-1 mt-3 ml-6">SAT Homemade Food</h3>
          <p className="text-xs w-60 h-22 font-thin">
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

