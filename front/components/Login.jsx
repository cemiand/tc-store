import React from "react";

export default () => (
  <div className="login-box">
    <h1>Login</h1>
    <div className="text-box">
      <img src="https://img.icons8.com/android/12/000000/user.png" />
      <input type="text" placeholder="User" />
    </div>
    <div className="text-box">
      <img src="https://img.icons8.com/material-rounded/12/000000/password.png" />
      <input type="password" placeholder="Password" />
    </div>
    <input type="checkbox" />
    <span>Remember Me</span>
    <button onClick={() => console.log("loggin")} className="btn">
      Login
    </button>
  </div>
);
