import React, { Component } from 'react';
import StarWars from './components/StarWars';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsCharData: {}, 
      starwarsCharUrl: 'https://swapi.co/api/people/1'
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getCharacterData(this.state.starwarsCharUrl);
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
  
  getCharacterData = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsCharData: data });
      })
      .catch(err => {
        // throw new Error(err);
        console.log(err);
      });
  };

  render() {
    console.log(this.state.starwarsCharUrl);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars 
          list={this.state.starwarsChars} 
          characterData={this.state.starwarsCharData}
          selectCharacter={this.getCharacters} 
          getCharacterData={this.getCharacterData} />
      </div>
    );
  }
}

export default App;