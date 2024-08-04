'use client'

import Room from "../component/Room"
import { useSearchParams } from 'next/navigation'
import Nav from "../component/Nav"
import Card from "./card"


const data=[{title:"Accessibility",
              list:['Access via exterior corridors','Hand-held shower head',' Height-adjustable shower head','Wheelchair accessible']},
              {title:'Entertainment',
                list:['43-inch LED TV','Cable channels','Premium TV channels','Free Wi-Fi']},
            {title:'Bedroom',
               list:['Bed sheets', 'Blackout curtains' ,'Cots/infant beds (surcharge)','Down duvet','Egyptian cotton bed sheets',
                'Pillow-top bed','Premium bedding']  } ,
                {title:'Bathrooms',
                    list:['Bathrobe','Designer toiletries','Hairdryer','Private bathroom','Rainfall showerhead','Shampoo',
                          'Shower','Slippers','Soap','Toilet paper', 'Towels']},

            {title:'Food and drink',
                list:['Eco-friendly cleaning supplies','Electric kettle','Free bottled water','Free tea bags/instant coffee',
                    'Minibar','Paper towels', 'Room service (limited)',]},
            {title:"More",
                list:['Daily housekeeping','Desk', 'Free local calls', 'Individually decorated','Individually furnished',
                    'Iron/ironing board (on request)','Laptop workspace', 'Laptop-compatible safe','Phone', 'Restaurant dining guide',
                    'Sitting area']
            }       
                ]
export default function page() {
  const searchParams = useSearchParams()

  return (
    <>
    <div className="bg-blue-950 pb-5" >
    <Nav />
    </div>
   <Room  url={searchParams.getAll("url")} text={searchParams.get('text')||"loading" }  />
   <div  className="grid mx-2  grid-cols-2 md:grid-cols-3 gap-2 md:gap-10" >
   {data.map((d)=>{
    return (
        <Card  key={d.title} title={d.title}  list={d.list} />
    )
   })}
   </div> 
   <div className="md:mx-20  md:w-[600px] mx-2  " >
   <h1  className="text-3xl font-semibold mb-3" >Reservation Form</h1>
   <p>Required fields are followed by *</p>
             <form action="" method="post"  className="flex flex-col " >
              <label htmlFor="name">Check-in Date *</label>
              <input type="date"  placeholder="Check-in Date" id="name" className="border-2  my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-full  h-10 " />
              <label htmlFor="email">Check-out Date *</label>
              <input type="date"  placeholder="Check-out Date" id="email" className="border-2 my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-full h-10 " />
              <label htmlFor="Adults">Adults</label>
              <input type="number"  min="1" max="5" id="Adults" className="border-2 my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-20 h-10 " />
                  <label htmlFor="Children">Children</label>
              <input type="number"  min="1" max="5" id="Children" className="border-2 my-2 bg-transparent focus:outline-none
                border-logo  rounded-md  w-20 h-10   " />
                <button type="submit" className="h-10  w-fit rounded-md  px-3  bg-logo text-white hover:opacity-75" >Check Avalablitiy</button>
             </form>
         </div>
    </>
  )
}
