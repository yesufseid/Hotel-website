"use client"
import Image from "next/image"
import { CgDollar } from "react-icons/cg";
import { GiCrossedPistols } from "react-icons/gi";


type Props={
    url:string
    text:string
}


export default function Room({url,text}:Props) {
  return (
    <div className=" flex flex-col justify-center md:mx-20 my-5 md:my-20 md:h-screen  ">
       <Image   src={url}  alt="img" height={600} width={400} className="w-full md:h-[500px] h-[500px] opacity-100"  />
       <h1 className="py-2 text-white  bg-blue-950 text-2xl font-serif  text-center font-medium ">{text}</h1>
       <div className="w-full h-20  border-2 border-slate-600  flex items-center ">
               <div className="md:mx-20 mx-2 flex justify-between w-full">
                    <p className="text-blue-950 flex items-center cursor-pointer" ><GiCrossedPistols className=" text-white mr-5  w-8 h-8 bg-logo p-1 rounded-full" />View Room details</p>
                    <button className="py-2 text-white bg-logo rounded-md cursor-pointer flex items-center px-2"><span className="flex items-center mr-5"><CgDollar />155</span>Avg/night</button>
               </div>
       </div>
    </div>
  )
}
