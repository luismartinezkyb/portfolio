import React, {useState, useRef, useEffect, useContext} from 'react';
import {motion} from 'framer-motion';
import axios from 'axios';
import { Switch } from "@material-tailwind/react";
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify'
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { LanguageContext } from '../context/LanguageContext';


const Contact= ({props})=> {
  
  const formref = useRef();
  const {constants} = useContext(LanguageContext);

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
        if(data.error){
          generateError(data.error)
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
        <p className={styles.sectionSubText}>{constants.headers.contact.subtitle}</p>
        <h3 className={styles.sectionHeadText}>{constants.headers.contact.title}</h3>
        {/* <Switch label={props.version==='lite'?constants.contactHeaders[0]:constants.contactHeaders[1]} id="teal" color="teal" onChange={props.toggleLite} checked={props.version==='normal'?true:false}/> */}
        <form ref={formref} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label htmlFor="name" className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{constants.headers.contact.text[0]}</span>
              <input 
              type="text" 
              value={form.name} 
              onChange={handleChange}
              name="name" 
              id="name" 
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
              placeholder={constants.headers.contact.text[0]}/>
          </label>


          <label htmlFor="email" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{constants.headers.contact.text[1]}</span>
            <input 
            type="email" 
            value={form.email} 
            onChange={handleChange}
            name="email" 
            id="email" 
            required
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            placeholder={constants.headers.contact.text[1]}/>
          </label>
          
          
          
          <label htmlFor="message" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{constants.headers.contact.text[2]}</span>
            <textarea
            rows="7" 
            onChange={handleChange}
            value={form.message} 
            name="message" 
            id="message" 
            required
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            placeholder={constants.headers.contact.text2[2]}/>
          </label>
          <button 
            type='submit'
            onSubmit={handleSubmit}
            className=' bg-blue-gray-500 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading? 'Sending...': 'Send'}
          </button>
        </form>
      </motion.div>
      {props.version==='normal'? <motion.div variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'>
          
          <EarthCanvas/>
      </motion.div>:''}
      
      <ToastContainer/>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");