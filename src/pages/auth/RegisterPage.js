import Header from "../../component/Header/app";
import Register from "../../component/Register/Register";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col justify-start items-center">
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
