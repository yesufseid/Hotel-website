import Image from "next/image"
import Buttons from "./Buttons"



type Props={
    url:string
    title:string
    text:string
}
export default function Box({url,title,text}:Props) {
  return (
    <div className="md:flex justify-between md:mx-20 my-5 items-center ">
        <div className="order-last " >
        <Image src={url} 
          quality={100}
           width={500} height={400}
       alt="img"   className="md:h-60 md:w-[600px]  w-full "  />
        </div>
        <div className="flex  w-full md:w-96 items-center  ">
            <hr className="w-0.5 h-48 bg-slate-600 mx-2 md:mr-12 " />
            <div className="flex flex-col gap-1">
               <h1 className="text-3xl font-sans font-semibold mb-1">{title}</h1>
               <p className="font-sans font-semibold">{text}</p>
               <div className="w-fit mt-0">
               <Buttons text="EXPLORE" path="#" />
               </div> 
             </div>
        </div>
    </div>
  )
}
