import Image from "next/image"


const PostOptions = () => {
  return (
    <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addVideo.png" alt="" width={20} height={20} />
          Video
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/poll.png" alt="" width={20} height={20} />
          Poll
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/addevent.png" alt="" width={20} height={20} />
          Event
        </div>
      </div>
  )
}

export default PostOptions
