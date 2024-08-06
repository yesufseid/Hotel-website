"use client"

import styled from "styled-components";
import Nav from "./component/Nav";
import Button from "./component/Buttons"
import { Scroll } from "./component/Scroll";
import { FaCalendarCheck } from "react-icons/fa";
import { usePathname } from 'next/navigation'




const Section=styled.div<{$path:string}>`
  background-image:url(${props=>props.$path==="/"?"/5.jpg":props.$path==="/facilities"? "/16.jpg":"/3.jpg"});
  background-repeat:repeat;
  background-attachment:fixed;
   background-position:center;
  background-size:cover;
  background-color:black;
  @media only screen and (min-width: 600px) {
 height:100vh;

}
  height:100vh;
`


export default function HomePage() {
  const pathname = usePathname()
  return (
      <Section  $path={pathname}  hidden={pathname === "/contact-us" ||pathname==="/booking"} >
        <Nav />
        <div className="md:mx-20 mx-2 text-white  flex flex-col gap-7 md:gap-2 mt-20 mb-10 md:mb-0 ">
            <p className="md:text-4xl text-2xl font-serif font-medium">WELCOME TO</p>
            <h1 className="md:text-9xl text-7xl font-serif font-bold">LUXURY</h1>
            <h1 className="md:text-6xl text-4xl font-serif font-semibold">HOTELS</h1>
            <p className="text-sm font-serif font-light">book your stay and enjoy luxury <br />redefined the most affordeble rates.</p>
        </div> 
         <Button  path="/rooms" text="Book Now" icon={<FaCalendarCheck className="text-white h-6 w-6" />} />
         <Scroll />
      </Section>
  );
}
