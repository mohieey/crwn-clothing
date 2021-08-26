import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "./../../Firebase/FirebaseUtils";

class SignIn extends Component {
  constructor() {
    super();

    this.state = { email: "", password: "" };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      if ((error.code = "auth/wrong-password")) {
        alert("Wrong password");
        return;
      } else {
        console.error(error);
      }
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              type="button"
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
