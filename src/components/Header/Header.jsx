import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <a href="/" rel="noopener noreferrer" className="header-link">
        <img src="./pokeball.svg" alt="Pokeball" id="logo"/>
        <h1 id="header-title">Pokédex</h1>
      </a>
    </div>
  );
}
