import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Inicio from './pages/inicio';
import Perfil from './pages/perfil';
import Logros from './pages/logros';
import Experiencia from './pages/experiencia';
import Habilidades from './pages/habilidades';
import Contacto from './pages/contacto';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/logros" element={<Logros />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;