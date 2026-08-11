import React from 'react';

function Logros() {
  const estudios = [
    {
      titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
      institucion: 'SENA',
      año: 'En formación',
      logo: '/public/sena.png'
    },
    {
      titulo: 'Bachillerato',
      institucion: 'Gustavo Uribe Ramirez',
      año: '2024',
      logo: '/public/uribe.png'
    },
    {
      titulo: 'Graduación de escuela',
      institucion: 'San Jose La Floresta',
      año: '2019',
      logo: '/public/san-jose.png'
    }
  ];

  return (
    <section className="seccion">
      <h1>Logros Académicos</h1>

      <div className="tarjetas">

        {estudios.map((estudio, index) => (
          <article className="tarjeta" key={index}>

            <div className="logo-institucion">
              <img
                src={estudio.logo}
                alt={`Logo de ${estudio.institucion}`}
              />
            </div>

            <h2>{estudio.titulo}</h2>

            <p>
              <strong>Institución:</strong> {estudio.institucion}
            </p>

            <p>
              <strong>Año:</strong> {estudio.año}
            </p>

          </article>
        ))}

      </div>
    </section>
  );
}

export default Logros;