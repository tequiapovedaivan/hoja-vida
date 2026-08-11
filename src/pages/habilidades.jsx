import React from 'react';

function Habilidades() {
  return (
    <section className="seccion">
      <h1>Habilidades y Hobbies</h1>

      <div className="habilidades-grid">

        <article className="tarjeta">
          <h2>Competencias técnicas</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </article>

        <article className="tarjeta">
          <h2>Habilidades blandas</h2>

          <ul>
            <li>Trabajo en equipo</li>
            <li>Responsabilidad</li>
            <li>Comunicación</li>
            <li>Aprendizaje continuo</li>
          </ul>
        </article>

        <article className="tarjeta">
          <h2>Hobbies</h2>

          <ul>
            <li>Microfútbol</li>
            <li>Videojuegos</li>
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Habilidades;