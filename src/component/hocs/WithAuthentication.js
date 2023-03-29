import { Navigate } from "react-router-dom";
import AuthHelper from "../../helpers/AuthHelper";

const WithAuthentication = (Component) => (props) => {
  const isAuthenticated = AuthHelper.isUserLoggedIn();
  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/login" replace />
  }
};

export default WithAuthentication;
