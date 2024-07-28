import React, { ReactNode } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";


type Props={
    path:string
    data?:{}
    text:string
    icon?:ReactNode
}


export default function Buttons({path,data,text,icon}:Props) {
  return (
    <Link  href={path}  className='w-fit px-3  text-white py-2 bg-logo flex justify-center
     items-center gap-4 hover:opacity-75  mx-auto rounded-lg '
     >{icon}{text}</Link>
  )
}

export  function Scroll() {
  return (
  <div className='w-fit mx-auto flex flex-col justify-center items-center gap-1 mt-5'>
   <p className='w-fit text-center text-white'>Scroll</p>
   <IoIosArrowDown className='w-10 h-10 text-black bg-white p-1 cursor-pointer hover:opacity-75  rounded-full' />
  </div>
  )
}