import React from "react";
import "./style.css";
export default function Pesquisa() {
  return (
    <div className="wrap">
      <div className="search">
        <input type="text" className="searchTerm" id="input_text" />
        <button type="submit" className="searchButton">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
}
