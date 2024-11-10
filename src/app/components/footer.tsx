import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faDiscord,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


export default function Footer(){
    return(
        <>
        <div className='flex md:flex-row flex-col justify-between pb-2'>
            <p className='pt-4 pl-5 text-xs font-poppins'>Copyright© Iqra 2024. All rights reserved.</p>

        <div className="flex justify-center items-center space-x-2 pr-16 md:mt-0 mt-3">
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
        </>
    )
}