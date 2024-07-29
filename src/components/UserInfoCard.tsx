import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({user} : {user? : User}) => {

  const userCreationDate = user?.createdAt.toLocaleDateString('en-Us',{
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">{user?.name} {user?.surname}</span>
          <span className="text-sm">@{user?.surname}</span>
        </div>
        <p className="text-center">{user?.description}</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="Location" width={16} height={16} />
          <span>
            Living in <b>{user?.city}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="School" width={16} height={16} />
          <span>
            Went to <b>{user?.school}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="Work" width={16} height={16} />
          <span>
            Works at <b>{user?.work}</b>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="Website" width={16} height={16} />
            <Link href={''} className="text-blue-500 font-medium">
              {user?.website}
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Image src="/date.png" alt="Joined Date" width={16} height={16} />
            <span>Joined {userCreationDate}</span>
          </div>
        </div>
        <button className="bg-blue-500 p-2 rounded-md text-white">Follow</button>
        <Link href={""} className="text-right bg text-red-500">Block</Link>
      </div>
    </div>
  );
};

export default UserInfoCard;
