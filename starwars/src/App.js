import React, { Component } from 'react';
import StarWars from './components/StarWars';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsCharUrl: 'https://swapi.co/api/people/1'
    };
  }

  getCharacterURL = url => {
    // (url === '') ? url = 'https://swapi.co/api/people/1' : url = url ;
    console.log('App clicked: ' + url );
    this.setState({ starwarsCharUrl: url });
    this.setState({ state: this.state });
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsCharUrl);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars 
          list={this.state.starwarsChars} 
          url={this.state.starwarsCharUrl} 
          selectCharacter={this.getCharacters} 
          getCharacterURL={this.getCharacterURL} />
      </div>
    );
  }
}

export default App;