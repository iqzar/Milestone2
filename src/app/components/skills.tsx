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
    <main id='skills'>
      <div className='md:mt-16 mt-10 font-poppins'>
        <h2 className='flex justify-center text-3xl'> My <span className='font-bold'> Skills</span></h2>

        <div className='font-custom text-sm font-semibold flex md:flex-row flex-col md:gap-16 gap-5 justify-center md:ml-0 ml-14 mt-14'>
          <div className='flex md:flex-row md:gap-16 gap-5'>
            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.1 }} // Adjust delay for each card
            >
              <FontAwesomeIcon className='ml-3 w-8 h-8 mb-5' icon={faHtml5} />
              <h3 className='ml-3'>Html5</h3>
            </motion.div>

            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.2 }} // Add delay for the second card
            >
              <FontAwesomeIcon className='ml-3 w-8 h-8 mb-5' icon={faCss3} />
              <h3 className='ml-3'>Css3</h3>
            </motion.div>
          </div>

          <div className='flex md:flex-row md:gap-16 gap-5 '>
            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.3 }} // Add delay for the third card
            >
              <Image className='mb-5 ml-3' src={ts} alt='ts' width={25} height={25} />
              <h3 className=''>Typescript</h3>
            </motion.div>

            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.4 }} // Add delay for the fourth card
            >
              <FontAwesomeIcon className='ml-3 w-8 h-8 mb-5' icon={faPython} />
              <h3>Python</h3>
            </motion.div>
          </div>
        </div>

        <div className='font-custom text-sm font-semibold flex md:flex-row flex-col md:gap-16 gap-5 justify-center md:ml-0 ml-14 md:mt-8 mt-5'>
          <div className='flex md:flex-row md:gap-16 gap-5'>
            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.5 }} // Add delay for the fifth card
            >
              <FontAwesomeIcon className='ml-3 w-8 h-8 mb-5' icon={faHtml5} />
              <h3 className='ml-3'>Html</h3>
            </motion.div>

            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.6 }} // Add delay for the sixth card
            >
              <Image className='mb-5 ml-4 rounded-sm' src={canva} alt='canva' height={30} width={30} />
              <h3 className='ml-3'>Canva</h3>
            </motion.div>
          </div>

          <div className='flex md:flex-row md:gap-16 gap-5 '>
            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.7 }} // Add delay for the seventh card
            >
              <Image className='mb-5 ml-3' src={ts} alt='ts' width={30} height={30} />
              <h3 className=''>Typescript</h3>
            </motion.div>

            <motion.div
              className='bg-white border-2 border-black w-28 h-28 hover:text-white hover:bg-slate-900 hover:border-green-200 pl-6 flex flex-col pr-6 justify-center'
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.3, delay: 0.8 }} // Add delay for the eighth card
            >
              <FontAwesomeIcon className='ml-3 w-8 h-8 mb-5' icon={faBootstrap} />
              <h3>Bootstrap</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
