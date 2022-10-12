import React from "react";
import { Link } from "react-router-dom";
import "./formulogin.css";

export default function Formulogin() {
  return (
    <form className="formuLogin">
      <h2 className="h2Login">Bem vindo Novamente!</h2>
      <fieldset className="fieldsetLogin">
        <legend>Login</legend>
        <ul className="ulLogin">
          <li className="liLogin">
            <label className="labelLogin" for="username">
              Email:
            </label>
            <input className="inputLogin" type="text" id="username" required />
          </li>
          <li className="liLogin">
            <label className="labelLogin" for="password">
              Senha:
            </label>
            <input
              className="inputLogin"
              type="password"
              id="password"
              required
            />
          </li>
          <li className="liLogin">
            <i />
            <a onClick={() => this.changeView("PWReset")} href="#">
              Esqueceu a senha?
            </a>
          </li>
        </ul>
      </fieldset>
      <button className="btnLogin">Login</button>
      <button
        className="btnlogin"
        type="button"
        onClick={() => this.changeView("signUp")}
      >
        <Link to="/cadastro">Cadastre-se</Link>
      </button>
    </form>
  );
}
