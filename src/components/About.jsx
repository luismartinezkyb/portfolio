import React, {useContext} from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';


import {fadeIn, textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';
import { LanguageContext } from '../context/LanguageContext';

const ServiceCard = ({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="logo" className='w-16 h-16 object-contain'/>
          <h3 className='text-center text-white text-[20px] font-bold '>{title}</h3>

          
        </div>
      </motion.div>
    </Tilt>
  )
}

const About=()=> {
  const {constants} = useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {constants.headers.overview.subtitle}
          
        </p>
        <h2 className={styles.sectionHeadText}>{constants.headers.overview.title}</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {constants.headers.overview.text.map((e, index)=>(
          <p key={index}>
          {e}
          <br />
          <br />
          </p>
        ))}

      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {constants.services.map((service, index)=>(
          <ServiceCard key={index} index={index} {...service}>
            
          </ServiceCard>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "me");