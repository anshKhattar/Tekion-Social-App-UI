import Header from "../../component/Header/app";
import Login from "../../component/Login/Login";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col justify-start items-center">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
