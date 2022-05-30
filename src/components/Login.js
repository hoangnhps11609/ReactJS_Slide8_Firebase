import React, { Component } from "react";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

class Login extends Component {
  login = () => {
    const { firebase } = this.props;

    firebase
      .login({
        email: "hoangnhps11609@gmail.com",
        password: "123456",
      })
      .then((authenticatedUser) => {
        console.log(authenticatedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  register = () => {
    const { firebase } = this.props;

    firebase
      .createUser(
        {
          email: "hoangnhps@gmail.com",
          password: "123456",
        },
        {
          name: "Hoang",
          email: "hoangnhps@gmail.com",
        }
      )
      .then((authenticatedUser) => {
        console.log(authenticatedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        sdasdas
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default compose(firebaseConnect())(Login);
