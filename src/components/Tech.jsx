import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { technologies } from "../constants"


export default function Tech() {
  return (
    <div className={`${styles.paddingX} flex flex-row flex-wrap justify-center gap-10`}>
      {technologies.map((tech, index)=>(
        <div className="w-28 h-28" key={index}>
            <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}
