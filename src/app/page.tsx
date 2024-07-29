import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import LeftBar from "@/components/LeftBar"
import RightBar from "@/components/RightBar"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-5 bg-slate-100 p-3'>
      <div className="hidden xl:block w-[20%] p-4">
        <LeftBar type="home"/>
      </div>
      <div className="w-full flex flex-col gap-5 lg:w-[70%] xl:w-[50%] p-4">
        <Stories />
        <AddPost />
        <Feed />
      </div>
      <div className="hidden lg:block w-[30%] p-4">
        <RightBar />
      </div>
    </div>
  )
}

export default Homepage