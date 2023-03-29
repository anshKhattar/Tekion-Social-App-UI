import { useRef, useState, useEffect } from "react";
import authService from "../../service/authService";


import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,useNavigate } from "react-router-dom";
import JWTHelper from "../../helpers/JWTHelper";
// import "./style.css";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
    const token = localStorage.getItem("token");
    if(token && JWTHelper.isJWTValid(token)){
        navigate("/")
    }
  }, []);

  useEffect(()=>{
    if(success)
        navigate("/")
  },[success])


  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    // const v2 = EMAIL_REGEX.test(email);
    if (!v1 ) {
      setErrMsg("Invalid Entry");
      return;
    }

    const user = { username, password };
    console.log(user);
    try {
 

      const response = await authService.loginRequest(user);
      // console.log(response.data);
      const token = response.data.token;
      // console.log(token);
      localStorage.setItem("token", token);
      // console.log(JSON.stringify(response));
      setSuccess(true);

     
      setUserName("");
      setPassword("");
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("User Details Taken");
      } else {
        setErrMsg("Signin Failed");
      }

    }
  };

  return (
    <>
      {success ? (
        <div className="w-full max-w-md min-h-sm flex flex-col justify-start p-2 m-4 rounded-md bg-gray-300">
          <h1>Success! you are signed in</h1>
         
        </div>
      ) : (
        <div className="w-full max-w-md min-h-sm flex flex-col justify-start p-2 m-4 rounded-md bg-gray-300">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
       

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              required
              onFocus={() => setUserNameFocus(true)}
              onBlur={() => setUserNameFocus(false)}
            />

            

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="passwordnote"
              className={passwordFocus && !validPassword ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            

            <button
              disabled={ !validPassword  ? true : false}
            >
              Sign In
            </button>
            <div className="w-full flex justify-center items-center">
          <Link to="/register">Sign up</Link>
          </div>
          </form>
          
        </div>
      )}
    </>
  );
};

export default Login;
