import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { codewars, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, headers } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  public_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-[300px] sm:w-[280px] lg:w-[300px]  justify-center items-center lg:h-[250px] sm:h-[270px]"
      >
        <div className="relative w-[250px] justify-center items-center flex">
          <img
            src={image}
            alt={name}
            className="w-[150px] object-cover rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 justify-end card-img_hover flex m-3">
          <div
            onClick={() => window.open(public_url, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill>
          </div>
        </div>

        <div className="mt-5 items-center flex justify-center">
          <h3 className="text-white font-bold text-[15px]">{name}</h3>
          {/* <div className='max-h-[200px] overflow-y-auto'>
            
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p> */}
        </div>
        {/* <div className="mt-4 flex flex-wrap gap-2 opacity-60">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

const ServiceCard = ({index, title, icon, public_url})=>{
  return (
    <Tilt className='w-full' >
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="logo" className='w-full object-contain'/>
          <div className="absolute inset-0 justify-end card-img_hover flex m-3">
          <div
            onClick={() => window.open(public_url, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill>
          </div>
        </div>
          <h3 className='text-center text-white text-[20px] font-bold '>{title}</h3>

          
        </div>
      </motion.div>
    </Tilt>
  )
}

const Certifications = () => {
  const {constants}= useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>{constants.headers.certification.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{constants.headers.certification.title}</h2>
      </motion.div>
      
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl leading-[30px] text-secondary text-[17px]"
        >
          {constants.headers.certification.text.map((e) => e)}
          
        </motion.p>
      </div>
      
      
      <div className="mt-20 flex flex-wrap gap-7">
        {constants.certifications.map((project, index) => (
          <ProjectCard key={`cert-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="w-full mt-20 flex-column">
        <p className={styles.sectionSubText}>Hoobies</p>
        <h2 className={styles.sectionHeadText}>CodeWars & Github</h2>
        
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl leading-[30px] text-secondary text-[17px]"
        >
          {constants.headers.certification.subtext}
          
        </p>
        
      </div>
      
      <div className="items-center justify-center flex flex-row mt-20">
        <a className='  bg-blue-gray-500 py-3 px-8 flex-row outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
          {constants.headers.certification.subtext2} 
          <img src={codewars} alt="codewars" className="w-[21px] object-contain" />
        </a>
      </div>
      <div className='mt-20 flex flex-col w-[80%] lg:w-full lg:flex-row  gap-10 items-center justify-center'>
        
        {constants.badges2.map((service, index)=>(
          <ServiceCard key={index} index={index} {...service} >
            
          </ServiceCard>
        ))}
      </div>
      
    </>
  );
};
export default SectionWrapper(Certifications, "");
