import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "./loginSignupStyles.css";
const Login = () => {
  const handleLoginHeaderClick = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("active");
  };

  const handleSignupHeaderClick = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.remove("active");
  };

  ////SIGN UP FUNCTIONALITY////////////////
  const [signInUsername, setSignInUsername] = useState("");
  const [signInpassword, setSignInPassword] = useState("");
  const signInemailChangeHandler = (event) => {
    setSignInUsername(event.target.value);
  };

  const signInpasswordChangeHandler = (event) => {
    setSignInPassword(event.target.value);
  };
  const signinSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      console.log(signInUsername, signInpassword);
      await axios.post("http://localhost:9000/auth/register", {
        username: signInUsername,
        password: signInpassword,
      });
      alert("Registration completed->Now LogIn");
      setSignInUsername(" ");
      setSignInPassword(" ");
    } catch (err) {
      console.log(err);
    }
  };

  ////////////LOGIN FUNCTIONALITY//////////////////////

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookie] = useCookies(["accessTokens"]);
  const navigate = useNavigate();

  const logInUserNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const logInpasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/auth/login", {
        username: username,
        password: password,
      });
      console.log(response.data.token);
      setCookie("accessTokens", response.data.token);
      // console.log(response.data.userID);
      window.localStorage.setItem("userID", response.data.userID);
      window.localStorage.setItem("TOKEN", response.data.token);
      navigate("/dashboard");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <body class="login-body">
        <section className="wrapper">
          <div className="form signup">
            <header onClick={handleSignupHeaderClick}>Signup</header>
            <form onSubmit={signinSubmitHandler}>
              <input
                type="text"
                placeholder="Full name"
                required
                value={signInUsername}
                onChange={signInemailChangeHandler}
              />
              <input type="text" placeholder="Email address" required />
              <input
                type="password"
                placeholder="Password"
                value={signInpassword}
                onChange={signInpasswordChangeHandler}
                required
              />
              <div className="checkbox">
                <input type="checkbox" id="signupCheck" />
                <label for="signupCheck">I accept all terms & conditions</label>
              </div>
              <input type="submit" value="Signup" />
            </form>
          </div>
          <div className="form login">
            <header onClick={handleLoginHeaderClick}>Login</header>
            <form onSubmit={loginSubmitHandler}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={logInUserNameChangeHandler}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={logInpasswordChangeHandler}
                required
              />
              <a href="#">Forgot password?</a>
              <input type="submit" value="Login" />
            </form>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Login;
