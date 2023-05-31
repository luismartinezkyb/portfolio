import React, {useContext} from 'react'
import {motion} from 'framer-motion';
import { me2, imageMe, imageMe2 } from '../assets';
import { styles, layout } from '../styles';

import {fadeIn, slideIn} from '../utils/motion';
import { LanguageContext } from '../context/LanguageContext';

export default function Hero() {
  const {constants} = useContext(LanguageContext);
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} top-[100px] sm:top-[100px] md:top-[100px] xl:top-60 absolute inset-0  w-100 flex flex-col xl:flex-row items-start`}>
        
        <div className='flex flex-row gap-6'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 xl:h-80 h-40 violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>{constants.headers.me.text[0]} <span className='text-[#915eff]'>{constants.headers.me.text[1]} </span></h1>
            <div className={`${styles.heroSubText} mt-2 text-white-100`}>
              
            {constants.heroText.map((e, i)=>(
              <div key={i}>
              <p>{e}</p>
              
              </div>
            ))}
              
            </div>
          </div>
        </div>
          
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='mt-2 w-full justify-center items-center flex flex-1 '>
          <img src={imageMe2} alt="me2" className="rounded-3xl object-contain w-[250px] sm:w-[350px] lg:w-[450px] opacity-90"/>  
        </motion.div>
        
      </div>
      
      
      
      
      <div className='absolute xs:bottom-5 bottom-6 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y:[0, 24, 0],
                
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"

              />
          </div>
            
        </a>

      </div>
    </section>
  )
}
