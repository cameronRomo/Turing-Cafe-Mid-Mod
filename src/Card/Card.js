import React from 'react';
import './Card.css';

const Card = ({ name, date, time, number, id }) => {
  return (
    <article className='card'>
      <h3>{ name }</h3>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>{ number }</p>
    </article>
  )
}

export { Card };