"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image"
import { CgDollar } from "react-icons/cg";
import { GiCrossedPistols } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";


type Props={
    url:string[]
    text:string
}


export default function Room({url,text}:Props) {
  const [slide,setSlide]=useState(0)
  var settings = {
    autoplay:false,
     speed: 300,
     autoplaySpeed: 8000,
     cssEase: "linear",
     dots:true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     swipeToSlide: true,
     afterChange:(i:any)=>(
          setSlide(i)
     ),
    customPaging: (i:any)=> (
    <div
      className={` ${slide===i&&"bg-logo"} w-4 h-4 rounded-full border-[1px] border-logo absolute bottom-10  `}
      >
      </div> 
    ),
     responsive: [
       {
         breakpoint:600,
         settings: {
           autoplay:false,
              speed: 300,
          autoplaySpeed: 8000,
            cssEase: "linear",
           slidesToShow:1,
           slidesToScroll:1,
           infinite: true,
           dots:true,
           swipeToSlide: true,
         }
   }]
   };
  return (
    <div className=" relative flex flex-col justify-center md:mx-20 my-5 md:my-20 md:h-screen  ">
      <Slider {...settings}>
       {url.map((m)=>{
        return(
          <Image key={m} 
          quality={100}
          style={{
              width: '100%',
              height: '100%',
            objectFit: 'cover', // cover, contain, none
          }}
          src={m}  alt="img" width={500} height={500}
          className="md:h-[500px] h-[500px]"  
          /> 
        )
       })}
     
      </Slider>
      <h1 className="py-2 text-white  bg-blue-950 text-2xl font-serif  text-center font-medium ">{text}</h1>
       <div className="w-full h-20  border-2 border-slate-600  flex items-center ">
               <div className="md:mx-20 mx-2 flex justify-between w-full">
                    <Link  scroll={false} href={{pathname:"/booking",query: {text:text,url:url},}}    className="text-blue-950 flex items-center cursor-pointer" ><GiCrossedPistols className=" text-white mr-1 md:mr-5  w-8 h-8 bg-logo p-1 rounded-full" />View Room details</Link>
                    <button className="py-2 text-white bg-logo rounded-md cursor-pointer flex items-center px-2"><span className="flex items-center mr-5"><CgDollar />155</span>Avg/night</button>
               </div>
       </div>
    </div>
  )
}
