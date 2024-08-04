import React, { ReactNode } from 'react'
import Link from 'next/link'



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

