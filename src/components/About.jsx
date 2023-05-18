import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';

import {fadeIn, textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';

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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
          
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled software developer with experience in Javascript, PHP, Typescript, Dart
        and expertise in frameworks like React, Nodejs, Laravel, NextJs and currently learning Sveltejs.
        <br />
        Experienced with different TechStacks like: MERN, PERN, LARAVEL, LARAVEL+REACT.
        <br />
        <br />
        I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that 
        solve real-world problems.
        
        


{/* 
        Proven ability to work collaboratively in cross-functional teams to deliver high-quality, scalable web applications.

        Proficient in both front-end and back-end development, with a strong understanding of web architecture and design patterns. 
        Dedicated to writing clean, maintainable code that adheres to industry best practices. A proactive problem solver who is passionate about 
        staying up-to-date with the latest technologies and techniques in the field.
        
        

        Experienced in participating in all stages of the development lifecycle, from requirements gathering and design, to development, testing, and deployment. 
        Skilled in Agile methodologies and using tools like Jira, Trello, Youtrack and Slack */}

        
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={index} index={index} {...service}>
            
          </ServiceCard>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "me");