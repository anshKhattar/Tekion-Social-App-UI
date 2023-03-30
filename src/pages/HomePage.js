import CreatePost from "../component/Post/CreatePost";
import Header from "../component/Header/app";
import PostContainer from "../component/Post/PostContainer";
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
          <div className=" py-4 flex-1 sticky">
            <CreatePost />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
