import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "./../FormInput/FormInput";
import CustomButton from "./../CustomButton/CustomButton";

class SignIn extends Component {
  constructor() {
    super();

    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
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

          <CustomButton type="submit" value="Submit form">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
