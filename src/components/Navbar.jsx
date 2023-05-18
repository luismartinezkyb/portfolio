import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Switch } from "@material-tailwind/react";
import {styles} from '../styles';
import {navLinks} from '../constants';
import { logo, logo_icon, menu, close } from '../assets';

import { BsFillSunFill, BsMoonFill} from "react-icons/bs";

export default function Navbar({version, toggleLite}) {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

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
          {navLinks.map((Link)=>(
            <li key={Link.id} className={`${active ==Link.title ? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          <li className={`${active ==Link.title ? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} >

            <Switch label={version==='normal'?'Lite Mode':'Normal Mode'} id="teal" color="teal" onChange={toggleLite} checked={version==='normal'? false:true} />
          </li>
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'> 
            <img src={toggle ? close : menu} alt="menuIcon" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)}/>
        </div>
        <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
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
            <li><Switch label={version==='normal'?'Switch to Lite Mode':'Switch to Normal Mode'} id="teal" color="teal" onChange={toggleLite} checked={version==='normal'? false:true} /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
