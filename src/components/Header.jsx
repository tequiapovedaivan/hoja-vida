import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">
          Mi Hoja de Vida
        </Link>
      </div>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/logros">Logros</Link>
        <Link to="/experiencia">Experiencia</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contacto">Contacto</Link>

        <a
          href="https://github.com/tequiapovedaivan/hoja-vida"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>

    </header>
  );
}

export default Header;