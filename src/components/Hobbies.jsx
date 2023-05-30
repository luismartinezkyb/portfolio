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

const Hobbies = ()=> {
    const {constants}= useContext(LanguageContext);
return (
    <>
    <motion.div variants={textVariant()} className="w-full mt-20 flex-column">
        <p className={styles.sectionSubText}>Hoobies</p>
        <h2 className={styles.sectionHeadText}>CodeWars & Github</h2>
        
        <p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 max-w-3xl leading-[30px] text-secondary text-[17px]"
        >
            {constants.headers.certification.subtext}
            
        </p>
        
        </motion.div>
        
        <div className="items-center justify-center flex flex-row mt-20">
        <a onClick={()=>window.open('https://www.codewars.com/users/luismartinezkyb/completed_solutions', '_blank')} className="inline-flex items-center justify-center p-5 text-base font-medium bg-blue-gray-500 py-3 px-8 outline-none w-fit text-white  shadow-md shadow-primary rounded-xl hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400">
            <img src={codewars} alt="codewars" className=" w-[21px] object-contain mr-3" />
            
            <span className="w-full">{constants.headers.certification.subtext2} </span>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a> 
        
        </div>
        <div className='mt-20 flex flex-col w-[80%] lg:w-full lg:flex-row  gap-10 items-center justify-center'>
        
        {constants.badges2.map((service, index)=>(
            <ServiceCard key={index} index={index} {...service} >
            
            </ServiceCard>
        ))}
        </div>
        <div className="w-full flex flex-row justify-center mt-10">
                <ul className="list-none mt-4 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4">
                {constants.contact2.links.map((linkItem, index)=>(
                    <li key={index} className={`flex-row flex font-poppins font-normal text-[16px] leading-[24px] text-dimWhite break-all hover:text-secondary cursor-pointer ${index!== constants.footerLinks.contact.links.length-1 ? 'mb-4': 'mb-0'} flex flex-row gap-2`}>
                    <img src={linkItem.icon} alt={linkItem.name} className="w-[21px] object-contain"/>
                    <a  target={linkItem.link==='#contact'?'_self':"_blank"} href={linkItem.link==='#'?'#contact':linkItem.link}>{linkItem.name}</a>
                    </li>
                ))}
                </ul>
            
            
        </div>
    </>
  )
}

export default SectionWrapper(Hobbies, "");