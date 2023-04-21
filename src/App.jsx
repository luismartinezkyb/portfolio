import React, {useState, useContext, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Works, Tech, Hero, Navbar, StarsCanvas, Experience, Feedbacks, Footer} from './components';
import "react-toastify/dist/ReactToastify.css";



export default function App() {

  const [version, setVersion] = useState('normal')
  

  useEffect(() =>{
    const lite_version = localStorage.getItem('version')

    console.log(lite_version, "Lo que trae el localStorage")
    if(lite_version===null){
      setVersion('normal');
      localStorage.setItem('version','normal');
    }else{
      
      setVersion(lite_version)
    }
  },[])

  //Para obtener si esta en lite version o neh
  
  const toggleLite = ()=>{
    if(version==='normal'){
      setVersion('lite');
      localStorage.setItem('version','lite');
      console.log("you've just changed the version to lite")
    }else{
      setVersion('normal');
      localStorage.setItem('version','normal');
      console.log("you've just changed the version normal")
    }
    
  }
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar toggleLite={toggleLite} version={version}/>
          <Hero version={version}/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact version={version}/>
          {version==='normal'?<StarsCanvas/>:''}
          <Footer/>
        </div>
      </div>
      
    </BrowserRouter>
  )
}
