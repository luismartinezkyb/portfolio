import React, {useState, useRef, useEffect} from 'react';
import {motion} from 'framer-motion';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify'
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact= ({props})=> {
  
  const formref = useRef();

  const generateError = (err) => toast.error(err, {
      position:"bottom-right",
  })
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })


  const [loading, setLoading] = useState(false);

  const handleChange = (e)=>{
    const {name, value} =e.target;
    setForm({...form, [name]:value})
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    setLoading(true);
    try{
      const {data} = await axios.post(import.meta.env.VITE_URL_API, {
          ...form
      });
      
      if (data){
        if(data.errors){
          generateError('Error en la peticion')
          setLoading(false);
        }
        else if(data.message==='success'){
          toast(`Se ha enviado el correo correctamente`, {theme:'dark', position:"bottom-right"});
          setForm({
            name:'',
            email:'',
            message:'',
          })
          setLoading(false);
        }
      }
    }
    catch(err){
        generateError('No se pudo enviar el mensaje, intente de nuevo')
        setLoading(false);
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formref} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label htmlFor="name" className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name:</span>
              <input 
              type="text" 
              value={form.name} 
              onChange={handleChange}
              name="name" 
              id="name" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
              placeholder="What's your name?"/>
          </label>


          <label htmlFor="email" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email:</span>
            <input 
            type="email" 
            value={form.email} 
            onChange={handleChange}
            name="email" 
            id="email" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            placeholder="What's your email?"/>
          </label>
          
          
          
          <label htmlFor="message" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name:</span>
            <textarea
            rows="7" 
            onChange={handleChange}
            value={form.message} 
            name="message" 
            id="message" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            placeholder="What do you want to send?"/>
          </label>
          <button 
            type='submit'
            onSubmit={handleSubmit}
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading? 'Sending...': 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'>
          
          {props.version==='normal'?<EarthCanvas/>:''}
      </motion.div>
      <ToastContainer/>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");