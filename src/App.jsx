import React, {useState, useContext, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Works, Tech, Hero, Navbar, StarsCanvas, Experience, Feedbacks, Footer, Me} from './components';
import "react-toastify/dist/ReactToastify.css";



export default function App() {

  const [version, setVersion] = useState('lite')
  

  useEffect(() =>{
    const lite_version = localStorage.getItem('version')
    console.log(lite_version)

    if(lite_version===null){
      setVersion('lite');
      localStorage.setItem('version','lite');
    }else{
      
      setVersion(lite_version)
    }
  },[])
  
  //Para obtener si esta en lite version o neh
  
  const toggleLite = ()=>{
    console.log("HOLA")
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
  console.log(version)
  
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
