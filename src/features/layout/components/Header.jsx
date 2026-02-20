import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky-top shadow-sm">
      <nav className="navbar navbar-dark bg-dark px-4">
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
          <i className="bi bi-cart3 fs-4"></i>
          <span className="fw-semibold">Carrito</span>
        </NavLink>
        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <NavLink className="nav-link px-2" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2" to="/articles">Artículos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link px-2" to="/props">Props</NavLink>
          </li>
        </ul>
        <form className="d-flex ms-3" role="search">
          <input
            type="search"
            className="form-control form-control-sm me-2"
            placeholder="Buscar..."
          />
          <button className="btn btn-outline-light btn-sm">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </nav>
    </header>
  );
};