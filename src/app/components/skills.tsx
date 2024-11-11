'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPython, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import ts from '../public/ts.png';
import canva from '../public/canva.jpg';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // Start from the left
  visible: { opacity: 1, x: 0 },  // Move to the center
};

export default function Skills() {
  return (
    <main id="skills" className="bg-white">
    <div className="md:mt-16 mt-10 font-poppins text-center">
      <h2 className="text-3xl">
        My <span className="font-bold">Skills</span>
      </h2>
  
      <div className="font-custom text-sm font-semibold flex flex-wrap justify-center gap-5 mt-14">
        {/* First row of skills */}
        <motion.div
          className="bg-white border-2 border-black w-40 md:w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FontAwesomeIcon className="w-8 h-8 mb-3" icon={faHtml5} />
          <h3>Html5</h3>
        </motion.div>
  
        <motion.div
          className="bg-white border-2 border-black w-40 md:w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <FontAwesomeIcon className="w-8 h-8 mb-3" icon={faCss3} />
          <h3>Css3</h3>
        </motion.div>
  
        <motion.div
          className="bg-white border-2 border-black w-40 md:w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image className="mb-3" src={ts} alt="ts" width={25} height={25} />
          <h3>Typescript</h3>
        </motion.div>
  
        <motion.div
          className="bg-white border-2 border-black w-40 md:w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <FontAwesomeIcon className="w-8 h-8 mb-3" icon={faPython} />
          <h3>Python</h3>
        </motion.div>
  
        {/* Second row of skills */}
        
  
        <motion.div
          className="bg-white border-2 border-black w-40 md:w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Image className="mb-3 rounded-sm" src={canva} alt="canva" height={30} width={30} />
          <h3>Canva</h3>
        </motion.div>
  
        
  
        <motion.div
          className="bg-white border-2 border-black w-40 md:w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <FontAwesomeIcon className="w-8 h-8 mb-3" icon={faBootstrap} />
          <h3>Bootstrap</h3>
        </motion.div>
      </div>
    </div>
  </main>
  

  )
}
