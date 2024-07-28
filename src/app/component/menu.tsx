"use client"
import { RiMenu3Line } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi"
import { useState } from "react"
import Link from "next/link"


const link=[{'name':'Home','link':'/'},{'name':'Facilties','link':'/Facilties'},{'name':'Rooms','link':'/Rooms'},
    {'name':'Contact-Us','link':'/Contact-Us'}]
export default function Menu() {
    const [open,setOpen]=useState(false)
  return (
    <div className="w-fit flex md:hidden " >
        {open?<GiCrossMark className="w-10 h-10 text-white" onClick={()=>setOpen(false)} /> :<RiMenu3Line className="w-10 h-10 text-white" onClick={()=>setOpen(true)}  />}     
     <div className={`absolute flex flex-col justify-center gap-10 top-0 left-0 w-[320px] h-full bg-white ${open?'translate-x-0 transition-all duration-300':'-translate-x-[320px] transition-all duration-300'}`}>
     {link.map((links)=>{
                return(
                   <Link  className="border-2 w-32 mx-auto rounded-lg text-center  font-semibold border-green-600 hover:bg-green-600 px-2 py-2" 
                    href={links.link}   >{links.name}</Link>
                )
            })} 
     </div>
    </div>
  )
}
