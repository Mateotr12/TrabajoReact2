import React from "react";

export const Footer = () => {
  return (
    <footer className="border-top py-3 mt-auto">
      <div className="container text-center text-md-between d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="text-muted small">
          © {new Date().getFullYear()} · Producto sonidos
        </span>

        <nav className="d-flex gap-3">
          <a href="#" className="text-muted small text-decoration-none">
            Ayuda
          </a>
          
        </nav>
      </div>
    </footer>
  );
};