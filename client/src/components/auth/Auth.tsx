"use client";
import "@/components/auth/Auth.css";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <div className="auth-parent-container">
        <div className="auth-container">
          <h1 className="brand-name">PaperBark</h1>
          <h5 className="brand-slogan">Make Your Project Production-Ready!</h5>
          <div className="input-email">
            <div className="input-heading">
              Email<span className="required-span">*</span>
            </div>
            <input type="text" placeholder="example@gmail.com" />
          </div>
          <div className="input-password">
            <div className="input-heading">
              Password<span className="required-span">*</span>
            </div>
            <input type="password" placeholder="shhh.." />
          </div>
          <button className="auth-submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <a className="auth-switch" onClick={() => setLogin(!isLogin)}>
            {isLogin ? "New Here? Register" : "Already have an account? Login"}
          </a>
        </div>
      </div>
    </>
  );
};

export default Auth;
