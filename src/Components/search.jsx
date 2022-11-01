import React, { useState } from 'react';
import { getData } from '../../services/service';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredElements, setFilteredElements] = useState([]);

  const searchSpells = async () => {
    const data = await getData('hechizos');
    console.log(data);
    console.log(inputValue);

    // filter data con inputValue
    setFilteredElements(data);
  };

  return (
    <div>
      <input
        placeholder="busca tu hechizo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={(e) => searchSpells(e)}>Buscar</button>
      {filteredElements.map((element, index) => {
        return <div key={index}>{element.hechizo}</div>;
      })}
    </div>
  );
};

export default Search;
