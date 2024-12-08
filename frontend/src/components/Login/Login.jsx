import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login">
      <form className="login-container">
        <div className="title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className="inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Name..." required />
          )}
          <input type="email" placeholder="Email..." required />
          <input type="password" placeholder="Password..." required />
        </div>
        <button className="signBtn">
          {currState === "Sign Up" ? "Create new Account" : "Login"}
        </button>
        <div className="checkBox">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Sign Up" ? (
          <p className="check">
            Already have an account ?{" "}
            <span
              onClick={() =>
                setCurrState((prev) =>
                  prev === "Sign Up" ? "Login" : "Sign Up"
                )
              }
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="check">
            Create a new account,{" "}
            <span
              onClick={() =>
                setCurrState((prev) => (prev === "Login" ? "Sign Up" : "Login"))
              }
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
