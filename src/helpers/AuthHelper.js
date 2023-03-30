import JWTHelper from "./JWTHelper";

const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  const isTokenValid = JWTHelper.isJWTValid(token);

  if (token && isTokenValid) return true;
  else {
    if (!isTokenValid) logoutUser();
    return false;
  }
};
const logoutUser = () => {
  localStorage.removeItem("token");
};

export default {
  isUserLoggedIn,
  logoutUser,
};
