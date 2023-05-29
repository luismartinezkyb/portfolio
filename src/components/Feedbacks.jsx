import {motion} from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from '../utils/motion'

import { testimonials } from '../constants';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const FeedbackCard = ({name, index, testimonial, designation, company, image, link})=>{

  return (
    <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <div className=' max-h-[300px] overflow-y-auto' >
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        </div>
        
        <div className='mt-7 flex gap-1 justify-between items-center'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px] hover:text-[#2f80ed] cursor-pointer' onClick={()=>window.open(link,'_blank')}>
              <span className='blue-text-gradient'>@</span>{name}
            </p>
            <p className='mt-1 text-secondary text-[12px] '>{designation} of {company} </p>

          </div>
          <img src={image} alt={`feedback-by-${name}`} onClick={()=>window.open(link,'_blank')} className='w-10 h-10 cursor-pointer rounded-full object-cover'/>
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks =()=> {
  const {constants} =useContext(LanguageContext)
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{constants.headers.testimonial.subtitle}</p>
          <h2 className={styles.sectionHeadText}>{constants.headers.testimonial.title}</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 items-center justify-center`}>
        {testimonials.map((test, index)=>(
          <FeedbackCard key={test.name} index={index} {...test}/>
        ))}
      </div>
    </div>
  )
}
export default SectionWrapper(Feedbacks, '')