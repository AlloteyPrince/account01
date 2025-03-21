import React from "react";
import "./LoginSignup.css";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import profile from "../Assets/profile.svg";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
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
      <div className="submit">Sign Up</div>
      <div className="submit">Log in</div>
    </div>
  );
};

export default LoginSignup;
