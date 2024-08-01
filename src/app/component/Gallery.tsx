import Image from "next/image"


type Props={
    url:string
    text:string
}


export default function Gallery({url,text}:Props) {
  return (
    <div className="  relative flex flex-col justify-center md:mx-20 my-5 md:my-20 md:h-screen  ">
       <Image  src={url} 
          quality={100}
          style={{
              width: '100%',
              height: '100%',
            objectFit: 'cover', // cover, contain, none
          }}
       alt="img" height={600} width={400} className="photo md:h-full h-[500px] blur-none brightness-100 contrast-100 saturate-150"  />
       <h1 className="w-40 py-2 text-black  absolute bottom-0 bg-white md:left-[500px] left-[110px] text-center font-sans ">{text}</h1>
    </div>
  )
}
