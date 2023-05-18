import { me2 as me_gto } from "../assets"
import { SectionWrapper } from "../hoc";
import {styles, layout} from "../styles";
import {motion} from 'framer-motion';
import { slideIn } from '../utils/motion';

const Me=()=> {
  return (
    <section className={`${layout.section} xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          Introduction
          
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
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
        </p>
        
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'>
        <img src={me_gto} alt="card" className="w-[100%] h-[100%] object-contain rounded-3xl"/>
      </motion.div>
    </section>
  )
}
export default SectionWrapper(Me, "about");