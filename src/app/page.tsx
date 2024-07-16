import LeftBar from "@/components/LeftBar"
import RightBar from "@/components/RightBar"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-5'>
      <div className="hidden xl:block w-[20%]">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <Stories />
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightBar />
      </div>
    </div>
  )
}

export default Homepage