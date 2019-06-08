import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

export default App;
// Break Down - This App should

// A list of Star Wars Characters rendered to the screen.
  // Component StarWarsList.js -- to hold the list of charcters

// Have at least one list element for each star wars character in the data set.
  // Component StarWarsCharacter.js -- will display an li for each charcter
    // li -- starwarsChars.name
      // Once get name to display consider making display the array of films the character is in starwarsChars.films

// The list elements must all be minimally styled. 
  // styles will go in StarWars.css