import React from 'react'
import Header from '../../component/Header/app'
import JWTHelper from '../../helpers/JWTHelper'





export default function Profile() {

  const fetchUserDetails = () => {
     console.log(JWTHelper.getUserDetailsFromJWT());
  }
  
  return (
    <div>
    <Header/>


    </div>
  )
}
