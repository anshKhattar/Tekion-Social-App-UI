import jwt_decode from "jwt-decode";

const isJWTValid = (token) => {
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
