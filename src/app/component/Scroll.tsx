"use client"

import {useState,useEffect} from 'react'; 
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


export  function Scroll() {
const scrollToTop = () =>{ 
	window.scrollTo({ 
	top:1000, 
	behavior: 'smooth'
	}); 
}; 
    return (
    <div className='w-fit mx-auto flex flex-col justify-center items-center gap-1 mt-5'>
     <p className='w-fit text-center text-white'>Scroll</p>
     <IoIosArrowDown  onClick={()=>scrollToTop()} className='w-10 h-10 text-black bg-white p-1 cursor-pointer hover:opacity-75  rounded-full' />
    </div>
    )
  }