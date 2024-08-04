

type props={
    title:string
    list:string[]
}

export default function Card({title,list}:props) {
  return (
    <div className="w-fit h-fit md:ml-20   ">
       <h1  className="md:text-3xl text-2xl font-semibold mb-3" >{title}</h1>
       <ol>
        {list.map((l)=>{
            return (
                <li key={l} className="flex items-center" ><div className="w-2 h-2 bg-black rounded-full mr-3"></div>{l}</li>
        )
        })}
       </ol>
    </div>
  )
}
