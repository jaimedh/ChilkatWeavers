import { Route } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import Profile from "../Profile/Profile";

export class Login extends Component {
  state = {
    isLoggedIn: false,
    profileData: null,
  };
  componentDidMount() {
    const authToken = sessionStorage.getItem("clientAuthToken");
    this.fetchProfile(authToken);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // endpoint is at http://localhost:8082/login
    const username = event.target.username.value;
    const password = event.target.password.value;
    axios
      .post("http://localhost:8082/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        sessionStorage.setItem("clientAuthToken", response.data.token);
        this.fetchProfile(response.data.token);
        
      })
      .catch((err) => console.log("login error", err));
  };
  fetchProfile = (token) => {
    axios
      .get("http://localhost:8082/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({
          profileData: response.data,
          isLoggedIn: true,
        });
      })
      .catch((err) => console.log("profile error", err));
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        {!this.state.isLoggedIn && (
          <form onSubmit={this.handleSubmit}>
            <h2>Login Form</h2>
            <input name="username" type="text" placeholder="User Name" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit" >Submit</button>
          </form>
        )}
        {this.state.isLoggedIn && (
          <>
          <Route
            path="/:id/profile"
            render={(routerProps) => (
              <Profile {...routerProps} />
            )}
          />
          </>
        )}
      </div>
    );
  }
}

export default Login;
