import React, { Component } from "react";
import "./SignInAndUp.scss";
import SignIn from "./../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInAndUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndUp;
