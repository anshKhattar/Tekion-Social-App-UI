import CreatePost from "../component/CreatePost";
import Header from "../component/Header/app";
import PostContainer from "../component/PostContainer";
import SideBar from "../component/SideBar";
import { NavLink } from 'react-router-dom'

// import SideBar from "../component/SideBar";

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex items-start justify-center flex-col-reverse sm:flex-row">
          <div className="flex-1">
            <PostContainer />
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
