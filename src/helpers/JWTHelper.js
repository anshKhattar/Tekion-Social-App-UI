import jwt_decode from "jwt-decode";



const fetchDetailsFromJWT = () => {
  const token = localStorage.getItem("token");
  if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
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
  isJWTValid, fetchDetailsFromJWT
};
