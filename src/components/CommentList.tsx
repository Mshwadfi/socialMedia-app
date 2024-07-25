import Image from "next/image"
import PostInterActions from "./PostInterActions"
const CommentList = () => {
  return (
    <div className="p-4">
      <div className="flex items-start justify-center gap-4">
      <Image src={''} alt="" width={40} height={40} className="w-10 h-10 rounded-full cursor-pointer"/> 

        <div className="flex flex-col gap-2">
            <span>Ali Abdullah</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quisquam error facilis quia eligendi aut sunt, nemo exercitationem, eveniet expedita tenetur corrupti blanditiis esse velit provident consequatur sapiente ab! Ex.</p>
            <PostInterActions />
        </div>
        <Image src={'/more.png'} alt="" width={16} height={16} className="w-4 h-4 rounded-full cursor-pointer"/> 

      </div>
    </div>
  )
}

export default CommentList
