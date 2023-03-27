import { MdAdd } from "react-icons/md";
const SideBarOption = ({ text = "", icon, link }) => {
  return (
    <div className="flex items-center justify-start gap-2 p-2 rounded-md min-w-[200px] bg-gray-300 text-left cursor-pointer">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
const SideBar = () => {
  return (
    <div className="p-2 border border-gray-300 rounded-xl min-h-[200px] md:min-h-[0] max-w-[350px]">
      <div>
        <SideBarOption text="Create Post" icon={<MdAdd />} />
      </div>
    </div>
  );
};
export default SideBar;
