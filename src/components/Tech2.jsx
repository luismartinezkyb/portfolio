import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { useContext, useEffect, Suspense, lazy } from "react"
import { LanguageContext } from "../context/LanguageContext"


const Tech2=()=> {
  
  return (
    <div className={` flex flex-row flex-wrap justify-center gap-10`}>
      TECH2
    </div>
  )
}
export default SectionWrapper(Tech2, '');