import React from 'react';
import './Reservations.css';
import { Card } from '../Card/Card'

const Reservations = ({ reservations }) => {

  const reservationCards = reservations.map(reservation => {
    return (
      <Card 
        name={ reservation.name }
        date={ reservation.date }
        time={ reservation.time }
        number={ reservation.number }
        id={ reservation.id}
        key={ reservation.id }
      />
    )
  })

  return (
    <section className='reservations-container'>
      { reservationCards }
    </section>
  )
}
export { Reservations };