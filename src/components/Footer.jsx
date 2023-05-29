import {styles} from "../styles"
import { logo_icon } from "../assets";
import { footerLinks, socialMedia } from "../constants"
import { SectionWrapper } from "../hoc";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

const Footer = () =>{
  
  const {constants} = useContext(LanguageContext)

  
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} flex-col bg-tertiary`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-center items-center justify-items-center mr-3 lg:mr-10 w-[100%]">
          <img src={logo_icon} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          {constants.headers.footer.text[0]}
          </p>
        </div>  
        <div className="flex-[1.5] w-full flex flex-row justify-start md:justify-center flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" >
              <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]"><span className="text-[#915eff]">{constants.footerLinks.preview.title}</span></h4>
              <ul className="list-none mt-4">
                {constants.footerLinks.preview.links.map((linkItem, index)=>(
                  <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index!== constants.footerLinks.preview.links.length-1 ? 'mb-4': 'mb-0'}`}>
                    <a href={`#${linkItem.link}`}>{linkItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-start md:justify-center flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" >
              <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]"><span className="text-[#915eff]">{constants.footerLinks.contact.title}</span></h4>
              <ul className="list-none mt-4">
                {constants.footerLinks.contact.links.map((linkItem, index)=>(
                  <li key={index} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite break-all hover:text-secondary cursor-pointer ${index!== constants.footerLinks.contact.links.length-1 ? 'mb-4': 'mb-0'} flex flex-row gap-2`}>
                    <img src={linkItem.icon} alt={linkItem.name} className="w-[21px] object-contain"/>
                    
                    <a  target={linkItem.link==='#contact'?'_self':"_blank"} href={linkItem.link==='#'?'#contact':linkItem.link}>{linkItem.name}</a>
                    
                  </li>
                ))}
              </ul>
            </div>
          
        </div>
        
      </div>

      <div className="w-full flex items-center m:flex-row flex-col pt-6 border-t-[3px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-4">
          {constants.headers.footer.text[1]}
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index)=>(
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1?'mr-6':'mr-0'}`} onClick={()=>window.open(social.link, '_blank')}/>
          ))}

        </div>
      </div>
    </section>
  )
}
export default SectionWrapper(Footer, "footer");