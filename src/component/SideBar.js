import { MdAdd } from "react-icons/md";
// import CreatePost from "./CreatePost";
// const SideBarOption = ({ text = "", icon, link }) => {
//   return (
//     <div className="flex items-center justify-start gap-2 p-2 rounded-md min-w-[200px] bg-gray-300 cursor-pointer text-center">
//       <div>{text}</div>
//     </div>
//   );
// };

const SideBar = () => {
  return (
    <div
      className="
          p-2
          border-2
         border-slate-900  
          rounded-xl 
          min-h-[200px] 
          md:min-h-[0] 
          max-w-[350px] 
          text-center 
          bg-gray-300 
          cursor-pointer
          "
    >
      <div>My Profile</div>
    </div>
  );
};
export default SideBar;
