import React from 'react';
import './card.css';

export const Card = (props) => {
  const { hechizo, tipo, uso } = props;

  return (
    <div className="card">
      <h3>{hechizo}</h3>
      <h5>{tipo}</h5>
      <p>{uso}</p>
    </div>
  );
};
