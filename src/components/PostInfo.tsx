"use client";

import { deletePost } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

const PostInfo = ({ postId }: { postId: string }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await deletePost(postId);
      // Add any additional logic you want after successful deletion
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <div className="relative">
      <Image
        src="/more.png"
        width={16}
        height={16}
        alt=""
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form onSubmit={handleDelete}>
            <button type="submit" className="text-red-500">
              Delete
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
