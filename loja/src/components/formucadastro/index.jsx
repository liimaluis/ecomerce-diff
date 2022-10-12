import React from "react";
import { Link } from "react-router-dom";
import "./formucadastro.css";

export default function Formucadastro() {
  return (
    <form className="formCadastro">
      <h2 className="h2Cadastro">Cadastre-se!</h2>
      <fieldset className="fieldCadastro">
        <legend>Criar Conta</legend>
        <ul className="ulCadastro">
          <li className="liCadastro">
            <label className="labelCadastro" for="username">
              Username:
            </label>
            <input
              className="inputCadastro"
              type="text"
              id="username"
              required
            />
          </li>
          <li className="liCadastro">
            <label className="labelCadastro" for="email">
              Email:
            </label>
            <input className="inputCadastro" type="email" id="email" required />
          </li>
          <li className="liCadastro">
            <label className="labelCadastro" for="password">
              Password:
            </label>
            <input
              className="inputCadastro"
              type="password"
              id="password"
              required
            />
          </li>
        </ul>
      </fieldset>
      <button className="btnCadastro">Cadastre-se</button>
      <button
        className="btnCadastro"
        type="button"
        onClick={() => this.changeView("logIn")}
      >
        <Link to="/login">Já tem uma conta?</Link>
      </button>
    </form>
  );
}
