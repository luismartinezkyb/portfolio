import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Works, Tech, Hero, Navbar, StarsCanvas, Experience, Feedbacks} from './components';
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      
    </BrowserRouter>
  )
}
