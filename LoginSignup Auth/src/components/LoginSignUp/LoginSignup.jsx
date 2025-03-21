import React, { useState } from "react";
import "./LoginSignup.css";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import profile from "../Assets/profile.svg";

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div className="inputs"></div>
        <div className="input">
          <img src={profile} alt="" />
          <input type="text" placeholder="User name" />
        </div>
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password?<span>Click here!</span>
      </div>
      <div className="submit-container"></div>
      <div className={action ==="Login"? "submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign up "?"submit gray":"submit"}onClick={()=>{setAction("Log in")}}>Log in</div>
    </div>
  );
};

export default LoginSignup;
