import React, { Component } from 'react';
import './App.css';
import MovieTrailer  from './containers/MovieTrailer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
         <div>
          movie Trailers
         </div>
       </header>
        <MovieTrailer></MovieTrailer>
      </div>
    );
  }
}

export default App;
