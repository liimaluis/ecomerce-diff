import React from "react";
import { Link } from "react-router-dom";
import "./formulogin.css";

export default function Formulogin() {
  return (
    <form>
      <h2>Bem vindo Novamente!</h2>
      <fieldset>
        <legend>Login</legend>
        <ul>
          <li>
            <label for="username">Email:</label>
            <input type="text" id="username" required />
          </li>
          <li>
            <label for="password">Senha:</label>
            <input type="password" id="password" required />
          </li>
          <li>
            <i />
            <a onClick={() => this.changeView("PWReset")} href="#">
              Esqueceu a senha?
            </a>
          </li>
        </ul>
      </fieldset>
      <button>Login</button>
      <button type="button" onClick={() => this.changeView("signUp")}>
        <Link to="/cadastro">Cadastre-se</Link>
      </button>
    </form>
  );
}
