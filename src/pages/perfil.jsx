import React from 'react';

function Perfil() {
  return (
    <section className="seccion">

      <h1>Perfil Profesional</h1>

      <div className="perfil">

        <div className="foto-perfil">
          <div className="foto-perfil-circulo">
            <img
              src="/foto.jpeg"
              alt="Foto de perfil"
            />
          </div>
        </div>

        <div className="perfil-texto">

          <h2>Perfil Profesional</h2>

          <p>
            Profesional con conocimientos en tecnologías, herramientas
            digitales, gestión de proyectos, análisis de información y
            trabajo colaborativo.
          </p>

          <p>
            Me encuentro en formación en el área de desarrollo de software,
            fortaleciendo mis conocimientos en programación y tecnologías
            web.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Perfil;