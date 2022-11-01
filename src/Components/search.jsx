import React, { useState } from 'react';
import { getData } from '../../services/service';
import { NavLink } from 'react-router-dom';
import { Card } from './card';

const Search = () => {
  //variable de estado donde se almacena el filtrado delos elementos
  const [inputValue, setInputValue] = useState(''); //set... funcion modificadora de las variables
  const [filteredElements, setFilteredElements] = useState([]); //los useState comienzan con el valor inicial de las variables, vacio.

  //llamada a la API
  const searchSpells = async () => {
    const data = await getData('hechizos');

    // filtrado del json
    setFilteredElements(
      data.filter((element) => {
        return (
          element.hechizo
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          element.tipo
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        );
      })
    );
  };

  return (
    <div>
      <div className="back">
        <NavLink to="/">volver</NavLink>
      </div>
      <div>
        <input
          placeholder="busca tu hechizo"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button onClick={(e) => searchSpells(e)}>Buscar</button>
      <div className="card-container">
        {filteredElements.map((element, index) => {
          //mapeo de los elementos filtrados para pintar
          return <Card key={index} {...element} />;
        })}
      </div>
    </div>
  );
};

export default Search;
