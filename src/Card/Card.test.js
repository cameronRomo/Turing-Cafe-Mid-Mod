import React from 'react';
import ReactDOM from 'react-dom';
import { render,screen } from '@testing-library/react'
import { Card } from './Card';
import '@testing-library/jest-dom';

describe.only('Form', () => {
  it('displays a reservation card', () => {
    render(
      <Card
        name='Cameron'
        date='12/25'
        time='7:00'
        number='10'
      />);

      const reservationName = screen.getByText('Cameron');
      const reservationDate = screen.getByText('12/25');
      const reservationTime = screen.getByText('7:00');
      const numberOfGuests = screen.getByText('10');

      expect(reservationName).toBeInTheDocument();
      expect(reservationDate).toBeInTheDocument();
      expect(reservationTime).toBeInTheDocument();
      expect(numberOfGuests).toBeInTheDocument();
  });
})