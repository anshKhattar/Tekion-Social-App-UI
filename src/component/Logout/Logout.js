import { useNavigate } from "react-router-dom";

const Logout =()=>{
    const navigate = useNavigate();
    
    const logoutHandler = ()=>{
        localStorage.removeItem("token");
        navigate("/");
    }

    return(
        <div onClick={logoutHandler} className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-[200px] mx-2">
            Logout
        </div>
    )
}
export default Logout;