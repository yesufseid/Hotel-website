import Image from "next/image"
import Buttons from "./Buttons"



type Props={
    url:string
    title:string
    text:string
}
export default function Box({url,title,text}:Props) {
  return (
    <div className="flex justify-center mx-20 my-5 items-center gap-20 ">
        <div className="flex w-96 ">
            <hr className="w-0.5 h-52 bg-slate-600 mr-7 " />
            <div className="flex flex-col gap-1">
               <h1 className="text-3xl font-sans font-semibold mb-2">{title}</h1>
               <p className="font-sans font-semibold">{text}</p>
               <div className="w-fit mt-1">
               <Buttons text="EXPLORE" path="@" />
               </div> 
             </div>
        </div>
        <div className="">
        <Image src={url} height={300} width={400} alt="img" className="h-64" />
        </div>
    </div>
  )
}
