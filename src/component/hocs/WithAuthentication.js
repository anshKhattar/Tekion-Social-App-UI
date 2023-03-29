import { Navigate } from "react-router-dom";

const WithAuthentication = (Component) => (props) => {
  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/login" replace />
  }
};

export default WithAuthentication;
