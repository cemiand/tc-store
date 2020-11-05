import React from "react";

export default ({ handleSign }) => (
   <div className="cont">
    <div className="form sign-in">
      <h2>Sign In</h2>
      <label>
        <span>Email Address*</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password*</span>
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
          <span>Name*</span>
          <input type="text" />
        </label>
        <label>
          <span>Email*</span>
          <input type="email" />
        </label>
        <label>
          <span>Password*</span>
          <input type="password" />
        </label>
        <label>
          <span>Confirm Password*</span>
          <input type="password" />
        </label>
        <button type="button" className="submit">
          Sign Up Now
        </button>
      </div>
    </div>

  </div> 

        );
        


      /*   < div className = "login-page" >
        <div className="box">
          <div className="left">
            <h3>Create Account</h3>
            <button type="button" className="register-btn">Register</button>
          </div>
          <div className="right">
            <h3>Have an Account ?</h3>
            <button type="button" className="login-btn">Login</button>
          </div>
          <div className="form">
             <!-- Login form Start --> 
            <div className="login-form">
              <h3>Log In</h3>
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password*" className="form-control" />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox"> Remember Me </input>
                </label>
              </div>
              <div className="social-media">
                <ul>
                  <li><img src="img/facebook.png" /></li>
                  <li><img src="img/google.png" /></li>
                </ul>
              </div>
              <button type="button" className="submit-btn">Login</button>
              <p><a href="#" className="register-btn">Register</a> | <a href="#" className="lost-pass-btn">Lost Your Password ?</a>
              </p>
            </div>
             	<!-- Login form End --> 
    
             	<!-- Register form Start --> 
            <div className="register-form form-hidden">
              <h3>Register</h3>
              <div className="form-group">
                <input type="text" placeholder="First Name*" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password*" className="form-control" />
              </div>
    
              <button type="button" className="submit-btn">Register</button>
              <p><a href="#" className="login-btn">Login</a> | <a href="#" className="lost-pass-btn">Lost Your Password ?</a></p>
            </div>
             <!-- Register form End --> 
    
             <!-- Lost Password form Start --> 
            <div className="lost-password-form form-hidden">
              <h3>Lost Your Password ?</h3>
              <h5>You will receive a link to create a new password via email.</h5>
    
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control" />
              </div>
    
    
              <button type="button" className="submit-btn">Reset Password</button>
              <p><a href="#" className="login-btn">Login</a> | <a href="#" className="register-btn">Register</a></p>
            </div>
            <!-- Lost Password form End --> 
    
          </div>
        </div>
        </div > */