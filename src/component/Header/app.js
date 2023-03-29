import React from "react";
import { Link } from "react-router-dom";
import AuthHelper from "../../helpers/AuthHelper";
import Logout from "../Logout/Logout";

export default function Header() {
    const isAuthenticated = AuthHelper.isUserLoggedIn();
  return (
    <>
      <div className="site-heading h-20 bg-[#01B9A0] sticky top-0 z-10 flex  items-center justify-center">
        <div className=" flex-[3] first:text-3xl font-bold pt-4 text-white text-center cursor-pointer">
          <Link to={"/"}>Tekion Social App</Link>
        </div>
        <div className="flex-1">
         {isAuthenticated && <Logout/>}
        </div>
      </div>
    </>
  );
}
