import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const PostComponent = ({ postData }) => {
  return (
    <div className="max-w-[370px] p-2 m-4 border border-gray-300 rounded-xl">
      {postData.contentType === "IMAGE" && (
        <div className="overflow-hidden  border-b object-cover">
          <img
            src={postData.contentLink}
            alt="post"
            className="w-full  object-cover"
          />
        </div>
      )}
      <div className="border-b min-h-[60px] bg-gray-200 rounded-md">
        <p className=" text-left text-sm text-body-color p-2 ">
          {postData.description}
        </p>
      </div>
      <div className="relative">
        <div className="overflow-hidden absolute -left-6 top-5 ">
          <img
            src={postData.user.profileImage}
            alt="post"
            className="w-14 h-14 rounded-full object-cover border border-black-500"
          />
        </div>
      </div>
      <div className="flex items-center content-center w-full p-1 pt-2 ">
        <div className=" flex-[2] text-start ml-10"> {postData.user.name}</div>
        <div className="flex-[3] flex justify-around items-center  ">
          
            <div className="cursor-pointer bg-gray-200 rounded-md px-3 py-2">
              <AiOutlineLike size={"20px"}  />
            </div>
            <div className="cursor-pointer bg-gray-200 rounded-md px-3 py-2">
              <AiOutlineDislike size={"20px"}  />
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default PostComponent;
