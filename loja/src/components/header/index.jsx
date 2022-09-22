import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return;
  <div className="bs-example">
    <ul id="nav" className="nav nav-pills clearfix right" role="tablist">
      <li class="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          Camisetas
        </a>

        <ul id="products-menu" className="dropdown-menu clearfix" role="menu">
          <li>
            <a href="">Apenas um show</a>
          </li>
          <li>
            <a href="">Naruto</a>
          </li>
          <li>
            <a href="">Hora de aventura</a>
          </li>
          <li>
            <a href="">Dragon ball Z</a>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          Moletons
        </a>

        <ul id="products-menu" className="dropdown-menu clearfix" role="menu">
          <li>
            <a href="">Apenas um show</a>
          </li>
          <li>
            <a href="">Naruto</a>
          </li>
          <li>
            <a href="">Hora de aventura</a>
          </li>
          <li>
            <a href="">Dragon ball Z</a>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          Acessórios
        </a>

        <ul id="products-menu" className="dropdown-menu clearfix" role="menu">
          <li>
            <a href="">Apenas um show</a>
          </li>
          <li>
            <a href="">Naruto</a>
          </li>
          <li>
            <a href="">Hora de aventura</a>
          </li>
          <li>
            <a href="">Dragon ball Z</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>;
}
