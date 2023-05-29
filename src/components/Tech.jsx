import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { useContext, useEffect, Suspense, lazy } from "react"
import { LanguageContext } from "../context/LanguageContext"


export default function Tech() {
  const {constants} = useContext(LanguageContext);
  
  return (
    <div className={`${styles.paddingX} flex flex-row flex-wrap justify-center gap-10`}>
      {constants.technologies.map((tech, index)=>(
        <div className="w-28 h-28" key={index}>
            <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}
