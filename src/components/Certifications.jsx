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
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
    </div>
  );
};



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
      
      
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-20 flex flex-wrap gap-7">
        {constants.certifications.map((project, index) => (
          <ProjectCard key={`cert-${index}`} index={index} {...project} />
        ))}
      </motion.div>
      
      
    </>
  );
};
export default SectionWrapper(Certifications, "");
