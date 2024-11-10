'use client'

import { motion } from 'framer-motion';




  const boxVariants = {
    hidden: { opacity: 0, x: -50 }, // Start from the left
    visible: { opacity: 1, x: 0 },  // Move to the center
  };

  export default function About(){
    return(
        <>
        <div className='bg-black text-white mt-10 pt-3 pb-20'>
       <h2 className="flex justify-center text-3xl leading-loose font-chakra 
    mt-10 text-white text-center animate-zoomIn">My Services</h2>

    
        <div className='flex md:flex-row flex-col md:ml-28 md:mr-28 mt-10 md:gap-10 gap-5'>
        <motion.div
              className='border border-green-200 rounded-xl px-2 pt-2 md:w-4/5 md:h-28 h-auto w-72 md:ml-0 ml-10'
              initial="hidden"
              whileInView="visible"
              variants={boxVariants}
              transition={{ duration: 0.3, delay: 0.1 }} // Adjust delay for each card
            >
            
                <h2 className='font-sm font-chakra font-semibold'>Strategy and Planning</h2>
                <p className='font-londrina text-xs text-left mt-2 leading-relaxed'>I develop clear and actionable strategies to ensure each project is aligned with client goals, setting a strong foundation for design and development.</p>
            </motion.div>
            <motion.div
              className='border border-green-200 rounded-xl px-2 pt-2 md:w-4/5 md:h-28 h-auto w-72 md:ml-0 ml-10'
              initial="hidden"
              whileInView="visible"
              variants={boxVariants}
              transition={{ duration: 0.3, delay: 0.1 }} // Adjust delay for each card
            >
                <h2 className='font-sm font-chakra md:font-normal font-semibold'>Designing on Canva</h2>
                <p className='font-londrina text-xs text-left mt-2 leading-relaxed'>I create eye-catching CVs, social media posts, and ads on Canva, blending visual appeal with brand consistency to make a lasting impression.</p>
            </motion.div>
        </div>

        <div className='flex md:flex-row flex-col md:ml-28 md:mr-28 mt-5 md:gap-10 gap-5'>
        <motion.div
              className='border border-black text-black hover:bg-slate-900 bg-green-200 rounded-xl px-2 pt-2 md:w-4/5 md:h-28 h-auto w-72 md:ml-0 ml-10'
              initial="hidden"
              whileInView="visible"
              variants={boxVariants}
              transition={{ duration: 0.3, delay: 0.1 }} // Adjust delay for each card
            >
                <h2 className='font-sm font-chakra md:font-normal font-semibold'>Web Design</h2>
                <p className='font-londrina text-xs text-left mt-2 leading-relaxed'>Specializing in front-end development, I design responsive and user-friendly websites that provide seamless experiences across devices.</p>
            </motion.div>
            <motion.div
              className='border border-green-200 rounded-xl px-2 pt-2 md:w-4/5 md:h-28 h-auto w-72 md:ml-0 ml-10'
              initial="hidden"
              whileInView="visible"
              variants={boxVariants}
              transition={{ duration: 0.3, delay: 0.1 }} // Adjust delay for each card
            >
                <h2 className='font-sm font-chakra md:font-normal font-semibold'>User Research</h2>
                <p className='font-londrina text-xs text-left mt-2 leading-relaxed'>I conduct research to understand user needs, ensuring that design decisions are backed by insights for improved user satisfaction and engagement.</p>
            </motion.div>
        </div>

       
  </div>

    </>

    )
  }