import React, { Component } from 'react';
import './App.css';
import MovieTrailer  from './containers/MovieTrailer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieTrailer></MovieTrailer>
      </div>
    );
  }
}

export default App;
