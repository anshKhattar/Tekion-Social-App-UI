import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import postService from "../../service/postService";

const VoteBar = ({ postData }) => {
  const handleVote = async (type) => {
    postService.votePost(postData.id, type);
  };
  return (
    <div className="flex-[3] flex flex-col justify-around items-center ">
<div className="w-full flex justify-center items-center text-[15px] py-2 gap-1">
<div>{postData.votes.likeCount} {postData.votes.likeCount<2?"like":"likes"}</div>
<div>{postData.votes.dislikeCount} {postData.votes.dislikeCount<2?"dislike":"dislikes"}</div>
</div>
    <div className="flex justify-around items-center gap-2 ">
      <div className="cursor-pointer bg-gray-200 rounded-md px-3 py-2">
        <AiOutlineLike size={"20px"} onClick={() => handleVote("like")} />
        
      </div>
      <div className="cursor-pointer bg-gray-200 rounded-md px-3 py-2">
        <AiOutlineDislike size={"20px"} onClick={() => handleVote("dislike")} />
        
      </div>
    </div>
    </div>
  );
};

export default VoteBar;
