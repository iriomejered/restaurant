import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">Mi Restaurante</Link>
        <div className="links">
          <Link to="/">Inicio</Link>
          <Link to="/desayunos">Desayunos</Link>
          <Link to="/almuerzos">Almuerzos</Link>
          <Link to="/cenas">Cenas</Link>
        </div>
      </div>
    </nav>
  );
}