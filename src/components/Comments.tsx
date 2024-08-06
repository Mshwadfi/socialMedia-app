import prisma from "@/lib/index";
import Image from "next/image";
import CommentList from "./CommentList";

const Comments = async ({postId}:{postId:string}) => {

  const comments = await prisma.comment.findMany({
    where:{
      postId,
    },
    include:{
      user:true
    }
  })
  console.log(comments)
  return (
    <div className="">
      {/* WRITE */}
      <CommentList comments={comments} postId={postId}/>
    </div>
  );
};

export default Comments;