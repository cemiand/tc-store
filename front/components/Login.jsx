import React from "react";

export default ({ handleSign }) => (
  <div className="cont">
    <div className="form sign-in">
      <h2>Sign In</h2>
      <label>
        <span>Email Address</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button className="submit" type="button">
        Sign In
      </button>

      <div className="social-media">
        <ul>
          <li>
            <img src="images/facebook.png" />
          </li>
          <li>
            <img src="images/google.png" />
          </li>
        </ul>
      </div>
    </div>

    <div className="sub-cont">
      <div className="img">
        <div className="img-text m-up">
          <h2>New here?</h2>
          <p>Sign up and discover great amount of new opportunities!</p>
        </div>
        <div className="img-text m-in">
          <h2>One of us?</h2>
          <p>If you already has an account, just sign in. We've missed you!</p>
        </div>
        <div className="img-btn" onClick={handleSign}>
          <span className="m-up">Sign Up</span>
          <span className="m-in">Sign In</span>
        </div>
      </div>
      <div className="form sign-up">
        <h2>Sign Up</h2>
        <label>
          <span>Name</span>
          <input type="text" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <label>
          <span>Confirm Password</span>
          <input type="password" />
        </label>
        <button type="button" className="submit">
          Sign Up Now
        </button>
      </div>
    </div>
    {/* <div className="login-box">
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
      </div> */}
  </div>
);
