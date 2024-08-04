"use client"

import {useState,useEffect} from 'react'; 
import { IoIosArrowUp } from "react-icons/io";


const ScrollButton = () =>{ 
const [visible, setVisible] = useState(false) 


useEffect(()=>{
	window.addEventListener('scroll', toggleVisible); 
},[])


const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	}
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 
return ( 
	<IoIosArrowUp
	className='bg-black rounded-full fixed bottom-10 right-10  text-white w-10 h-10 cursor-pointer z-50 ' onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} /> 
); 
} 

export default ScrollButton; 
 