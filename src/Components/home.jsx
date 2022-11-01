import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la biblioteca de Hechizos</h1>
      <NavLink to="search">Ir al buscador</NavLink>
    </div>
  );
};

export default Home;
