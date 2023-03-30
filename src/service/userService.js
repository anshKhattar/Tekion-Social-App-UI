import JWTHelper from "../helpers/JWTHelper";


const fetchDetailsFromJWT = () =>{
  let token = localStorage.getItem("token");
  const data = JWTHelper.fetchDetailsFromJWT(token);
  return data;
};






export default {
  fetchDetailsFromJWT,
};
