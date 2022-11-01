import React, { useState } from 'react';
import { getData } from '../../services/service';
import { NavLink } from 'react-router-dom';

const Search = () => {
  //variable de estado donde se almacena el filtrado delos elementos
  const [inputValue, setInputValue] = useState(''); //set... funcion modificadora de las variables
  const [filteredElements, setFilteredElements] = useState([]); //los useState comienzan con el valor inicial de las variables, vacio.

  //llamada a la API
  const searchSpells = async () => {
    const data = await getData('hechizos');
    console.log(data);
    console.log(inputValue);

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
      <div>
        <NavLink to="/">volver</NavLink>
      </div>
      <input
        placeholder="busca tu hechizo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={(e) => searchSpells(e)}>Buscar</button>
      {filteredElements.map((element, index) => {
        //mapeo de los elementos filtrados para pintar
        return (
          <div className="card" key={index}>
            <h3>{element.hechizo}</h3>
            <h5>{element.tipo}</h5>
            <p>{element.uso}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
