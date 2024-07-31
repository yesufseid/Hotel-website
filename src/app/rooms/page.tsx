import Room from "../component/Room"



const Img=[{name:'SINGLE ROOM',url:['/13.jpg','/4.jpg','/14.jpg']},{name:'DOBULE ROOM',url:['/4.jpg','/13.jpg','/14.jpg']},
    {name:'TWIN ROOM',url:['/14.jpg','/13.jpg','/4.jpg']}]
export default function page() {
  return (
    <>
        <div className="md:mx-20 mx-2">
              <h1 className="text-5xl font-mono font-semibold text-center my-5">ROOMS AND RATES</h1>
              <p className="text-center  font-sans text-lg">We want  your stay at our lush hotel to be truly unforgattable that is 
                why we give special attention to all of your needs to that we can ensure an exprience quite
                uniquw. luxury hotels offers the perfect setting with  stunning vewis for leisure
                and our modern Luxury resort facilities will help you enjoy the best of all</p>
        </div>
         {Img.map((I)=>{
            return(
                <Room  key={I.name}  url={I.url} text={I.name} />
            )
         })}
    </>
  )
}
 