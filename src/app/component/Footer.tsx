   "use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";



function SampleNextArrow(props:any) {
    const {onClick } = props;
    return (
      <IoIosArrowForward   onClick={onClick}
       className='w-8 h-8 cursor-pointer absolute text-white top-20 right-72 bg-logo rounded-lg hover:opacity-75 hidden md:flex ' />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const {onClick } = props;
    return (
      <IoIosArrowBack onClick={onClick}  
      className='w-8 h-8 cursor-pointer  absolute top-20 left-72 hover:opacity-75  bg-logo text-white rounded-lg hidden md:flex ' />
    );
  }



export default function Footer() {
    var settings = {
       autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        dots:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint:600,
            settings: {
              autoplay: true,
                 speed: 3000,
             autoplaySpeed: 5000,
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
    <>
       <div className="md:w-[700px] md:mx-auto  relative my-10 ">
        <h1 className="text-5xl font-sans font-semibold text-center my-4">Testimonials</h1>
      <Slider {...settings}>
       {[1,2,3].map((m)=>{
        return(
            <div key={m} className="text-center flex flex-col justify-center gap-2 text-black">
            <q className="text-3xl font-serif ">Calm,sento,rento-what awaye of relaxe</q>
            <p>mr,and mr&apos;s baxon uk</p>
           </div>
        )
       })}
     
      </Slider>
      <IoTriangleSharp  className="w-32 h-32 hidden md:flex  absolute top-[170px] left-[285px] text-blue-950   " />
    </div>

    <div className="bg-blue-950 md:h-40 py-2  text-white text-sm  md:mt-32">
        <div className="md:flex items-center justify-between  h-full mx-2   md:mx-20 ">
            <div className="my-5 md:my-0 ">
            <h1 className="text-2xl font-serif font-semibold mb-0 pb-0">LUXURY</h1>
            <p  className="text-center text-sm font-serif font-thin w-fit ml-5 mt-0 pt-0 mb-2 ">HOTELS</p>
            <p>497 Evergreen Rd, Rosevillen,CA 95673</p>
            <p>+44 345 678 903</p>
            <p>luxury_hotels@gmail.com</p>
            </div>
           <div className="flex gap-20">
            <div className="">
            <h1 className="text-xl font-serif font-semibold ">About Us</h1>
            <h1 className="text-xl font-serif font-semibold my-2 ">Contact</h1>
            <h1 className="text-xl font-serif font-semibold ">Term and Condtion</h1>
            </div>

            <div className="">
                <div className="flex gap-5 justify-center items-center w-fit">
                <FaFacebookF className="w-6 h-6 text-white " />
                <p>Facebook</p>
                </div>
                <div className="flex gap-5 justify-center items-center w-fit my-3">
                <IoLogoInstagram className="w-6 h-6 text-white " />
                <p>Instagram</p>
                </div>
                <div className="flex gap-5 justify-center items-center w-fit">
                <FaTwitter className="w-6 h-6 text-white " />
                <p>Twitter</p>
                </div>  
             </div>
             </div>
            <div className="my-5 md:my-0">
               <p>Subscribe to our newsletter</p>
               <div className="flex gap-0 mt-4">
               <input  placeholder="Email Address" type="email" className="border-2 bg-transparent focus:outline-none
                border-logo border-r-0 rounded-md rounded-r-none w-full h-10  text-white text-center" />
               <button className="border-2 border-logo border-l-0 rounded-md rounded-l-none h-10 w-20 text-black bg-logo ">OK</button>
               </div>
            </div>

        </div>
    </div>
    </>
  )
}
