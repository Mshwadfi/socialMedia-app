import Image from "next/image"

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-5">
        <Image alt="" src={''} width={32} height={32} className="w-8 h-8 rounded-full"/>
        <div className="flex items-center justify-between w-full bg-slate-100 rounded-xl text-sm px-8 py-2">
            <input type="text" placeholder="write a comment..." className="bg-transparent outline-none flex-grow"/>
            <Image src={'/emoji.png'} alt="" width={16} height={16} className="w-4 h-4 rounded-full"/> 
        </div>
      </div>
    </div>
  )
}

export default Comments
