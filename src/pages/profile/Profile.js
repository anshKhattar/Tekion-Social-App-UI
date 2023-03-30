import React, { useEffect, useState } from "react";
import Header from "../../component/Header/app";
import UserProfile from "../../component/User/UserProfile";
import userService from "../../service/userService";

export default function Profile() {
  const [userData, setUserData] = useState();

  const updateUserData = () => {
    
    const data = userService.fetchDetailsFromJWT();
    // console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    updateUserData();
  }, []);

  return (
    <div>
      <Header />
      <div>

        <UserProfile userData={userData} />
      </div>
    </div>
  );
}
