import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <h1>Bienvenido</h1>
        </section>
        <section id="about">
          <h1>Sobre mí</h1>
        </section>
        <section id="services">
          <h1>Servicios</h1>
        </section>
        <section id="contact">
          <h1>Contacto</h1>
        </section>
      </main>
    </div>
  );
}
export default App;