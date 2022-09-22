import React from "react";

export default function Formulogin() {
  return (
    <form>
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label for="username">Username:</label>
            <input type="text" id="username" required />
          </li>
          <li>
            <label for="password">Password:</label>
            <input type="password" id="password" required />
          </li>
          <li>
            <i />
            <a onClick={() => this.changeView("PWReset")} href="#">
              Forgot Password?
            </a>
          </li>
        </ul>
      </fieldset>
      <button>Login</button>
      <button type="button" onClick={() => this.changeView("signUp")}>
        Create an Account
      </button>
    </form>
  );
  return (
    <form>
      <h2>Reset Password</h2>
      <fieldset>
        <legend>Password Reset</legend>
        <ul>
          <li>
            <em>A reset link will be sent to your inbox!</em>
          </li>
          <li>
            <label for="email">Email:</label>
            <input type="email" id="email" required />
          </li>
        </ul>
      </fieldset>
      <button>Send Reset Link</button>
      <button type="button" onClick={() => this.changeView("logIn")}>
        Go Back
      </button>
    </form>
  );
}
