"use client"


import Box from "./component/Box";


export default function Home() {
  return (
      <>
          <h1  className="text-center my-5 text-black font-serif ">All our room types are including complemetariy breakfast</h1>
           <Box title="Luxury redifaine" text="Our rooms are designed to transport
                you in to an envroment made for leisure. Take your mind off the day-to-day of home 
                life and find a private paradise for yourself. " url="/2.jpg" />
                <Box title="Luxury redifaine" text="Our rooms are designed to transport
                you in to an envroment made for leisure. Take your mind off the day-to-day of home 
                life and find a private paradise for yourself. " url="/1.jpg" />
      </>
  );
}
