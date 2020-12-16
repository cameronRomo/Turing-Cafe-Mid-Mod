import React, { Component } from 'react';
import './App.css';
import { currentReservationsAPI } from '../apiCalls'

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
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
