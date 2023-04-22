import { me2 as me_gto } from "../assets"
import { SectionWrapper } from "../hoc";
import {styles, layout} from "../styles";
import {motion} from 'framer-motion';
import { slideIn } from '../utils/motion';

const Me=()=> {
  return (
    <section className={`${layout.section} xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl'>
      <h2 className={styles.heading2}>
          Let's talk about me <br className="sm:block hidden"/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            This is me in Guanajuato City, i actually love to travel around my country, there are 
            several places where you can go here, "Pueblos Mágicos" is how we call them all, it's a place that is valued
            by Mexico as some city with a lot of culture and meaning, 
        </p>
        
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'>
        <img src={me_gto} alt="card" className="w-[100%] h-[100%] rounded-3xl"/>
      </motion.div>
    </section>
  )
}
export default SectionWrapper(Me, "Me");