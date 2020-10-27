import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login/Login";
import "./LoginContainer.css";

class LoginContainer extends React.Component {
  constructor() {
    super();

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleLogin();
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-page">
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <p>
            Dont have an account?{"  "}
            <Link to="/register" className="auth-link">
              Signup Now
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
