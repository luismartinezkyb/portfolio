import { graduation } from "../assets";
import { useContext } from "react";
import { SectionWrapper } from "../hoc";
import {styles, layout} from "../styles";
import { LanguageContext } from "../context/LanguageContext";
import {motion} from 'framer-motion';
import { slideIn } from '../utils/motion';

const Me=()=> {
  const {constants} = useContext(LanguageContext);
  return (
    <section className={`flex lg:flex-row flex-col ${styles.paddingY} xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          {constants.headers.about.subtitle}
        </p>
        <h2 className={styles.sectionHeadText}>{constants.headers.about.title}</h2>
        <div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>        
          {constants.headers.about.text.map((txt, index)=>(
            <p key={index}>
            {txt}
            <br />
            <br />
            </p>
          )
          )}
        </div>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className=' justify-center items-center flex flex-1 '>
        <img src={graduation} alt="card" className=" rounded-3xl md:w-[400px] w-[80%]  object-contain "/>
      </motion.div>
    </section>
  )
}
export default SectionWrapper(Me, "about");