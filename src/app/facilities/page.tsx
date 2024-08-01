import Gallery from "../component/Gallery"

export const metadata = {
  title: 'facilities',
  openGraph: {
    title: 'facilities',
    description: "best bar in welkite",
  },
}

const Img=[{name:'THE GYM',url:'/8.jpg'},{name:'POOLSIDE BAR',url:'/6.jpg'},
    {name:'THE SPA',url:'/12.jpg'},{name:'SWIMMING POOL',url:'/10.jpg'},
    {name:'RESTAURANT',url:'/20.jpg'},{name:'LAUNDRY',url:'/9.jpg'}]
export default function page() {
  return (
    <>
        <div className="md:mx-20 mx-2">
              <h1 className="text-5xl font-mono font-semibold text-center my-5">FACILITIES</h1>
              <p className="text-center  font-sans text-lg">We want  your stay at our lush hotel to be truly unforgattable that is 
                why we give special attention to all of your needs to that we can ensure an exprience quite
                uniquw. luxury hotels offers the perfect setting with  stunning vewis for leisure
                and our modern Luxury resort facilities will help you enjoy the best of all</p>
        </div>
         {Img.map((I)=>{
            return(
                <Gallery  key={I.name}  url={I.url} text={I.name} />
            )
         })}
    </>
  )
}
 