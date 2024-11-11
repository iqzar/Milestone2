'use client'

import { motion } from 'framer-motion';




  const boxVariants = {
    hidden: { opacity: 0, x: -50 }, // Start from the left
    visible: { opacity: 1, x: 0 },  // Move to the center
  };

  export default function About(){
    return(
        <>
      <div className="bg-black text-white mt-10 pt-3 pb-20">
  <h2 className="flex justify-center text-3xl leading-loose font-chakra mt-10 text-white text-center animate-zoomIn">
    My Services
  </h2>

  {/* Services section */}
  <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-10 md:mx-28">
    <motion.div
      className="border border-green-200 rounded-xl p-4 md:w-2/5 w-72"
      initial="hidden"
      whileInView="visible"
      variants={boxVariants}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <h2 className="text-sm font-chakra font-semibold">Strategy and Planning</h2>
      <p className="font-poppins text-xs text-left mt-2 leading-relaxed">
        I develop clear and actionable strategies to ensure each project is aligned with client goals, setting a strong foundation for design and development.
      </p>
    </motion.div>

    <motion.div
      className="border border-green-200 rounded-xl p-4 md:w-2/5 w-72"
      initial="hidden"
      whileInView="visible"
      variants={boxVariants}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h2 className="text-sm font-chakra font-semibold">Designing on Canva</h2>
      <p className="font-poppins text-xs text-left mt-2 leading-relaxed">
        I create eye-catching CVs, social media posts, and ads on Canva, blending visual appeal with brand consistency to make a lasting impression.
      </p>
    </motion.div>

    <motion.div
      className="border border-black text-black hover:bg-slate-900 bg-green-200 rounded-xl p-4 md:w-2/5 w-72"
      initial="hidden"
      whileInView="visible"
      variants={boxVariants}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <h2 className="text-sm font-chakra font-semibold">Web Design</h2>
      <p className="font-poppins text-xs text-left mt-2 leading-relaxed">
        Specializing in front-end development, I design responsive and user-friendly websites that provide seamless experiences across devices.
      </p>
    </motion.div>

    <motion.div
      className="border border-green-200 rounded-xl p-4 md:w-2/5 w-72"
      initial="hidden"
      whileInView="visible"
      variants={boxVariants}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <h2 className="text-sm font-chakra font-semibold">User Research</h2>
      <p className="font-poppins text-xs text-left mt-2 leading-relaxed">
        I conduct research to understand user needs, ensuring that design decisions are backed by insights for improved user satisfaction and engagement.
      </p>
    </motion.div>
  </div>
</div>


    </>

    )
  }