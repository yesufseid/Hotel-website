import Nav from "../component/Nav"
import Link from "next/link"
import { IoIosArrowRoundUp } from "react-icons/io";

export default function page() {
  return (
    <>
     <div className="bg-blue-950" >
        <Nav />
        <h1 className="text-5xl pt-10 pb-20 font-sans font-semibold text-center  text-white">CONTACT-US</h1>
     </div>
     <div className="md:mx-20 mx-2 my-10 md:my-16">
     <h1 className="text-4xl  mb-2 md:mb-0 font-sans font-semibold  text-black">WE ARE HERE FOR YOU</h1>
     <p className="text-2xl font-serif" >At Luxury Hotels, we take our customers seriously. Do you have any enquires, compaints or requests
      please forwared it to our support desk and we will get back to you a soon as possible.
     </p>
     </div>
     <div className="md:mx-20 mx-2 md:flex justify-between text-2xl font-serif  " >
         <div>
             <p className="flex items-center">497 Evergreen Rd. Roseville, <br />
              CA95673</p>
              <Link href={"#"} className="flex items-center gap-2 my-3" >Veiw map <IoIosArrowRoundUp className="w-14 h-14 rotate-90" /> </Link>
             <p  className="flex items-center" >Phone: +44 345 678 903</p>
             <p>Email: luxury_hotels@gmail.com</p>
         </div>
         <div className="md:w-[500px] w-full" >
             <form action="" method="post">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="border-2  my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-full h-10 " />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="border-2 my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-full h-10 " />
              <label htmlFor="message">Message</label>
              <input type="text" id="message" className="border-2 my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-full h-40 " />
                <button type="submit" className="h-10  w-fit rounded-md  px-3 ml-auto bg-logo text-white hover:opacity-75" >Submit</button>
             </form>
         </div>
     </div>
    </>
  )
}
