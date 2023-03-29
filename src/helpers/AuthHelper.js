import JWTHelper from "./JWTHelper";

const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token && JWTHelper.isJWTValid(token)) return true;
  else return false;
};

export default {
  isUserLoggedIn,
};
