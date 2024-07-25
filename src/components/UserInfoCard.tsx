import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const UserInfoCard = () => {
  const user = {
    name: "Muhammad Alshwadfy",
    username: "Ali",
    bio: "bla bla bla",
    location: "Cairo",
    school: "user.school",
    work: "user.work",
    website: "user.website",
    joinedDate: "formattedDate"
  };

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
          <span className="text-xl text-black">{user.name}</span>
          <span className="text-sm">@{user.username}</span>
        </div>
        <p>{user.bio}</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="Location" width={16} height={16} />
          <span>
            Living in <b>{user.location}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="School" width={16} height={16} />
          <span>
            Went to <b>{user.school}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="Work" width={16} height={16} />
          <span>
            Works at <b>{user.work}</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="Website" width={16} height={16} />
            <Link href={user.website} className="text-blue-500 font-medium">
              {user.website}
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="Joined Date" width={16} height={16} />
            <span>Joined {user.joinedDate}</span>
          </div>
        </div>
        <button className="bg-blue-500 p-2 rounded-md text-white">Follow</button>
        <Link href={""} className="text-right bg text-red-500">Block</Link>
      </div>
    </div>
  );
};

export default UserInfoCard;
