import React, {useState, useContext, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Works, Tech, Hero, Navbar, StarsCanvas, Experience, Feedbacks, Footer, Me, Certifications} from './components';
import "react-toastify/dist/ReactToastify.css";



export default function App() {

  const [version, setVersion] = useState('lite')
  

  useEffect(() =>{
    const lite_version = localStorage.getItem('version')
    

    if(lite_version===null){
      setVersion('lite');
      localStorage.setItem('version','lite');
    }else{
      
      setVersion(lite_version)
    }
  },[])
  
  //Para obtener si esta en lite version o neh
  
  const toggleLite = ()=>{
    
    if(version==='normal'){
      setVersion('lite');
      localStorage.setItem('version','lite');
      
    }else{
      window.location.hash = '#contact';
      window.location.reload();
      setVersion('normal');
      localStorage.setItem('version','normal');
      
    }
    
  }
  
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          
          <Hero />
        </div>
        <Me/>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Certifications/>
        <Feedbacks/>
        <div className={`${version==='normal'?'relative z-0':'bg-hero-pattern bg-cover bg-no-repeat bg-center'}`}>
          <Contact toggleLite={toggleLite} version={version}/>
          {version==='normal'?<StarsCanvas/>:''}
          <Footer/>
        </div>
      </div>
      
    </BrowserRouter>
  )
}
