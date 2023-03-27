import { useEffect, useState } from "react";
import postService from "../service/postService";
import PostComponent from "./PostComponent";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);
  const loadPosts=async()=>{
    const posts = await postService.getAllPosts();
    setPostList(posts.data)
  }
  console.log(postList);
  useEffect(()=>{
    loadPosts();
  },[])

  return (
      <div className=" w-full flex  justify-center items-center">
        <div className="flex flex-wrap justify-center items-center w-full flex-col gap-6">
          {postList.map((postData, i) => (
            <PostComponent postData={postData} key={i} />
          ))}
        </div>
      </div>
  );
};
export default PostContainer;
