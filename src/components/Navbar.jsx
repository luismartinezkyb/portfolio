import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Switch, Select, Option } from "@material-tailwind/react";
import {styles} from '../styles';
import {navLinks, imagesLanguages} from '../constants';
import { logo, logo_icon, menu, close, esL, enL, mxL } from '../assets';
import { LanguageContext } from '../context/LanguageContext';

import { BsFillSunFill, BsMoonFill} from "react-icons/bs";

export default function Navbar() {
  
  const {toggleLanguage, language, constants} = useContext(LanguageContext);
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  const [togglelang, setTogglelang]=useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      
      <div className='w-full flex justify-between max-w-7x1 items-center mx-auto'>
        <Link className='flex items-center gap-2' to="/" onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }}>
        {/* LOGO IN APP.logo com */}
        <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
          Luis Mtz &nbsp;<span className=' hidden sm:block'>| FullStack Dev</span>
        </p>
        </Link>
        
        
        
        <ul className='list-none hidden lg:flex flex-row gap-5'>
          {constants.navLinks.map((Link)=>(
            <li key={Link.id} className={`${active ==Link.title ? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          <li className={`${active ==Link.title ? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} >
            <button id="dropdownNavbarLink" onClick={()=>setTogglelang(!togglelang)} className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              <img src={imagesLanguages[language]} alt=""  className='object-contain w-[25px]'/>
              <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            
          </li>
          
        </ul>


        <div onMouseLeave={()=>!togglelang?'':setTogglelang(false)} id="dropdownNavbar" className={`${togglelang?'':'hidden'} p-6 black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="py-2 px-3 text-sm text-gray-700 dark:text-gray-400">
            {constants.languagesNav.map((e, i)=>(
              <li key={i} className='flex flex-row gap-2 py-2 hover:cursor-pointer hover:text-white' onClick={()=>{
                toggleLanguage(e.name)
              }}>
                <img src={e.icon} alt={e.name}  className='object-contain w-[25px]'/>
                {e.title}
              </li>

            ))}
            
          </ul>
        </div>



        <div className='lg:hidden flex flex-1 justify-end items-center'> 
            <img src={toggle ? close : menu} alt="menuIcon" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)}/>
        </div>
        
        <div className={`${!toggle ? 'hidden': 'flex'} lg:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end flex-col items-start gap-4'>
            {navLinks.map((Link)=>(
              <li 
              key={Link.id} 
              className={`${active ==Link.title ? "text-white":"text-secondary"} font-poppins hover:text-white text-[16px] font-medium cursor-pointer`} 
              onClick={()=>{
                setToggle(!toggle)
                setActive(Link.title)

              }}>
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
