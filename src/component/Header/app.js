import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="site-heading h-20 bg-[#01B9A0] sticky top-0 z-10">
        <div className="text-3xl font-bold pt-4 text-white text-center cursor-pointer">
          <Link to={"/"}>Tekion Social App</Link>
        </div>
      </div>
    </>
  );
}
