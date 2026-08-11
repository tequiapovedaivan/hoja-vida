import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className="inicio">

      <div className="inicio-contenido">

        <div className="inicio-izquierda">

          <h1>HOJA DE VIDA DIGITAL</h1>

          <p className="subtitulo">
            Página web personal
          </p>

          <div className="botones-inicio">

            <Link to="/perfil" className="boton-inicio">
              Perfil Profesional
            </Link>

            <Link to="/logros" className="boton-inicio">
              Logros Académicos
            </Link>

            <Link to="/experiencia" className="boton-inicio">
              Experiencia Laboral
            </Link>

            <Link to="/habilidades" className="boton-inicio">
              Habilidades
            </Link>

          </div>

        </div>

        <div className="inicio-derecha">

          <div className="foto-inicio">
            <img
              src="/foto.jpeg"
              alt="Foto de perfil"
            />
          </div>

          <Link to="/contacto" className="boton-contacto">
            Contacto
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Inicio;