import CreatePost from "../CreatePost";
import Header from "../Header/app";
import PostContainer from "../PostContainer";
import SideBar from "../SideBar";

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex items-start justify-center flex-col-reverse sm:flex-row">
          <div className="flex-1">
        <CreatePost/>
            <PostContainer />
          </div>
          <div className=" py-4 flex-1 sticky">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
