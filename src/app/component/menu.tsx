"use client"
import { RiMenu3Line } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi"
import { useState } from "react"
import Link from "next/link"
import styled from "styled-components";


const Section=styled.div`

  @media only screen and (min-width: 600px) {
 height:100vh;
}

`
const link=[{name:'Home',link:'/'},{name:'Facilties',link:'/facilities'},{name:'Rooms',link:'/rooms'},
    {'name':'Contact-Us','link':'/contact-us'}]
export default function Menu() {
    const [open,setOpen]=useState(false)
  return (
    <Section className="w-fit flex md:hidden  overflow-scroll  " >
        {open?<GiCrossMark className="w-10 h-10 text-white z-50" onClick={()=>setOpen(false)} /> :<RiMenu3Line className="w-10 h-10 text-white" onClick={()=>setOpen(true)}  />}     
    
     <div className={`absolute top-0 left-0 w-full h-full overflow-y-auto bg-transparent  ${open?'translate-x-0 transition-all duration-300':'-translate-x-[320px] transition-all duration-300'}`}>
        <div className="bg-white flex flex-col justify-center gap-10  w-[320px] h-full">
     {link.map((links)=>{
                return(
                   <Link key={links.name} scroll={false}  onClick={()=>setOpen(false)} className="border-2 w-32 mx-auto rounded-lg text-center  font-semibold border-logo hover:bg-logo px-2 py-2" 
                    href={links.link}   >{links.name}</Link>
                )
            })}
            </div> 
     </div>
    </Section>
  )
}
