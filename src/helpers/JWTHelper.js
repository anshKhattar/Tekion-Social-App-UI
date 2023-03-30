import jwt_decode from "jwt-decode";



const fetchDetailsFromJWT = () => {
  
}
const isJWTValid = (token) => {
  if(!token) return false;
  let decodedToken = jwt_decode(token);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    return false;
  } else {
    return true;
  }
};

export default {
  isJWTValid,
};
