import { useRef, useState, useEffect } from "react";
import authService from "../../service/authService";

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import JWTHelper from "../../helpers/JWTHelper";
import LoadingSpinner from "../LoadingSpinner";
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
  const [loading, setLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
    const token = localStorage.getItem("token");
    if (token && JWTHelper.isJWTValid(token)) {
      navigate("/");
    }
  }, []);

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
    if (!v1) {
      setErrMsg("Invalid Entry");
      return;
    }

    const user = { username, password };
    console.log(user);
    try {
      setLoading(true);
      const response = await authService.loginRequest(user);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
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
      <div className="w-full max-w-md min-h-sm flex flex-col justify-start p-3 m-4 rounded-md bg-gray-300">
        <div className="w-full flex justify-center items-center font-bold">
          <h1>Login</h1>
        </div>
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
            className={
              passwordFocus && !validPassword ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <div className="w-full flex justify-center items-center py-3">
            <div className=" flex justify-center items-center shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold  rounded w-[200px] mx-2">
              <button
                disabled={!username || !validPassword ? true : false}
                className={
                  "disabled:cursor-not-allowed h-full w-full py-2 px-4"
                }
              >
                {loading ? <LoadingSpinner /> : "Sign In"}
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-sm">
            <div className="flex justify-center items-center">
              <div className="px-2">Or, Create new account.</div>
              <Link to="/register" className="font-bold hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
