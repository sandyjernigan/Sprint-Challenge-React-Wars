import React, { Component } from 'react';

// Using URL: {this.state.starwarsCharData.url} to display more information

class StarWarsData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        starwarsCharData: {}
      };
    }

    componentDidMount() {
        this.getCharacterData(this.props.url);
      }
  
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

        return (
            <div className="displayData">
                <h4>Select a Character to Display more information.</h4>
                <p>Name: {this.state.starwarsCharData.name}</p>
                <p>Gender: {this.state.starwarsCharData.gender}</p>
                <p>Height: {this.state.starwarsCharData.height}</p>
                <p>Mass: {this.state.starwarsCharData.mass}</p>
                <p>Hair Color: {this.state.starwarsCharData.hair_color}</p>
                <p>Skin Color: {this.state.starwarsCharData.skin_color}</p>
                <p>Eye Color: {this.state.starwarsCharData.eye_color}</p>
                {/* <p>Home World: {this.state.starwarsCharData.homeworld}</p> This is another json result....  */}
            </div>
        );
    }
}

export default StarWarsData;

// more JSON results - will need other components to display
  // Home World: {this.state.starwarsCharData.homeworld}
  // Films: {this.state.starwarsCharData.films}
  // Species: {this.state.starwarsCharData.species}
  // Vehicles: {this.state.starwarsCharData.vehicles}
  // Starships: {this.state.starwarsCharData.starships}