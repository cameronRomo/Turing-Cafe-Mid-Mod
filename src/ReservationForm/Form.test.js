import React from 'react';
import ReactDOM from 'react-dom';
import { render,screen } from '@testing-library/react'
import { Form } from './Form';
import '@testing-library/jest-dom';

describe.only('Form', () => {
  it('displays correct input fields for the form', () => {
    render(
      <Form 
        name='Cameron'
        date='12/25'
        time='7:00'
        number='10'
      />);

    const guestNameInput = screen.getByPlaceholderText('Name');
    const reservationDateInput = screen.getByPlaceholderText('Date (mm/dd)');
    const reservationTimeInput = screen.getByPlaceholderText('Time');
    const nuberOfGuestsInput = screen.getByPlaceholderText('Number of guests');

    expect(guestNameInput).toBeInTheDocument();
    expect(reservationDateInput).toBeInTheDocument();
    expect(reservationTimeInput).toBeInTheDocument();
    expect(nuberOfGuestsInput).toBeInTheDocument();
  });
})