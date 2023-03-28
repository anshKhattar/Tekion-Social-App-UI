import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";
import "./style.css";
import Login from '../Login/Login';
import { Link } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const REGISTER_URL = "/api/auth/signup";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);

  const [username, setUserName] = useState("");
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [age, setAge] = useState("");
  const [ageFocus, setAgeFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [genderFocus, setGenderFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [name, username, email, age, gender, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    const v2 = EMAIL_REGEX.test(email);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    const user = { name, username, email, age, gender, password };
    var bodyFormData = new FormData();
    
    for (const key in user) {
      if (user.hasOwnProperty(key)) {
        bodyFormData.append(`${key}`, user[key]);
      }
    }
    
    
    // user.forEach((value, key) => {
    //   bodyFormData[key] = value;
    // })
    // for(i of user){
    //   bodyFormData.append(i);
    // }
    // console.log(user);
    try {
 

   

     const response = await axios({
      method: 'post',
      url: REGISTER_URL,
      data: bodyFormData,
      headers: {
          'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
      },
  });

      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);

      setName("");
      setUserName("");
      setEmail("");
      setAge("");
      setGender("");
      setPassword("");
      setMatchPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("User Details Taken");
      } else {
        setErrMsg("Registration Failed");
      }

    }
  };

  return (
    <>
      {success ? (
        <div className="w-full max-w-md min-h-sm flex flex-col justify-start p-2 m-4 rounded-md bg-gray-300">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </div>
      ) : (
        <div className="w-full max-w-md min-h-sm flex flex-col justify-start p-2 m-4 rounded-md bg-gray-300">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className=" inline">Name:</label>
            <input
              type="text"
              id="name"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />

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

            <label htmlFor="email">
              Email:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          

            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
              onFocus={() => setAgeFocus(true)}
              onBlur={() => setAgeFocus(false)}
            />

            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
              onFocus={() => setGenderFocus(true)}
              onBlur={() => setGenderFocus(false)}
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

            <label htmlFor="confirm_password">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPassword ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_password"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              disabled={!validEmail || !validPassword || !validMatch ? true : false}
            >
              Sign Up
            </button>
          <div className="w-full flex justify-center items-center">
          <Link to="/login">Sign In</Link>
          </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
