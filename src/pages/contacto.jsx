import React from 'react';

function Contacto() {
  return (
    <section className="seccion contacto">
      <h1>Contáctame</h1>

      <p>
        Déjame tu información y cuéntame qué necesitas.
      </p>

      <form>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Escribe tu nombre"
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Escribe tu correo"
        />

        <label>
          ¿Requiere de mis servicios como desarrollador?
        </label>

        <div className="opciones">
          <label>
            <input type="radio" name="servicio" value="si" />
            Sí
          </label>

          <label>
            <input type="radio" name="servicio" value="no" />
            No
          </label>
        </div>

        <label>Cuéntame la necesidad</label>

        <textarea
          rows="5"
          placeholder="Escribe aquí..."
        ></textarea>

        <button type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contacto;