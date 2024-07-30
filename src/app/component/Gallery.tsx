import Image from "next/image"


type Props={
    url:string
    text:string
}


export default function Gallery({url,text}:Props) {
  return (
    <div className="  relative flex flex-col justify-center mx-20 my-20 h-screen  ">
       <Image   src={url}  alt="img" height={400} width={400} className="w-full h-full"  />
       <h1 className="w-40 py-2 text-black  absolute bottom-0 bg-white left-[500px] text-center font-sans ">{text}</h1>
    </div>
  )
}
