import { useEffect, useState } from "react";
import postService from "../service/postService";
import LoadingSpinner from "./LoadingSpinner";
import PostComponent from "./PostComponent";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    const posts = await postService.getAllPosts();
    setLoading(false);
    setPostList(posts.data);
  };

  useEffect(() => {
    setLoading(true);
    loadPosts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="p-6">

        <LoadingSpinner />
        </div>
      ) : (
        <div className=" w-full flex  justify-center items-center">
          <div className="flex flex-wrap justify-center items-center w-full flex-col gap-6">
            {postList.map((postData, i) => (
              <PostComponent postData={postData} key={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default PostContainer;
