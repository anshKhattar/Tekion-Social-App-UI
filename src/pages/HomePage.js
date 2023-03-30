import CreatePost from "../component/Post/CreatePost";
import Header from "../component/Header/app";
import PostContainer from "../component/Post/PostContainer";
import SideBar from "../component/SideBar";
import {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import postService from "../service/postService";

// import SideBar from "../component/SideBar";

const HomePage = () => {
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
      <div>
        <Header />
        <div className="flex items-start justify-center flex-col-reverse sm:flex-row">
          <div className="flex-1">
            <PostContainer postList={postList} loading={loading}/>
          </div>
          <div className="fixed right-4 top-[6em]">
            <NavLink to="/profile"><SideBar /></NavLink>
          </div>
          <div className=" py-4 flex-1 sticky">
            <CreatePost />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
