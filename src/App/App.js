import React, { Component } from 'react';
import './App.css';
import { currentReservationsAPI } from '../apiCalls'
import { Reservations } from '../Reservations/Reservations'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount = async () => {
    await currentReservationsAPI()
    .then(reservations => this.setState({ reservations: reservations }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <section className='resy-container'>
          {this.state.reservations.length === 0 && <h2>There are currently no reservations.</h2>}
          <Reservations 
            reservations={ this.state.reservations }
          />
        </section>
      </main>
    )
  }
}

export default App;
