import {createContext, useEffect, useState} from 'react'
import * as constantsEn from '../constants'
import * as constantsEs from '../constantsTranslated'

export const LanguageContext = createContext()

export default function LanguageContextProvider(props) {
    

    const [language, setLanguage] = useState('en')

    var constants = language=='en' ? constantsEn : constantsEs;

    useEffect(() =>{
        
        const lang = localStorage.getItem('lang')
        
        if(lang===null){
            setLanguage('en');
            localStorage.setItem('lang', 'en');
        }else{
            setLanguage(lang);
        }

        
    },[])

    const toggleLanguage =(newLang)=>{
        setLanguage(newLang);
        localStorage.setItem('lang',newLang);
        console.log("you've just changed the language to ", newLang==='es'?'spanish':'english');
        // if(language==='en'){
        //     setLanguage('es');
        //     localStorage.setItem('lang','es');
        //     console.log("you've just changed the language to spanish")
        // }else{
        //     setLanguage('en');
        //     localStorage.setItem('lang','en');
        //     console.log("you've just changed the language to english")
        // }
    }

    
    
    return (
        <LanguageContext.Provider value={{
            language, toggleLanguage, constants
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}
