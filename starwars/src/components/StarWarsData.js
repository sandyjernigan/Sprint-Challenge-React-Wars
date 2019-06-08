import React, { Component } from 'react';

class StarWarsData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        starwarsCharData: {}
      };
    }

    componentDidMount() {
        this.getCharacterData('https://swapi.co/api/people/1');
      }
  
    getCharacterData = URL => {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ starwarsCharData: data.results });
        })
        .catch(err => {
          // throw new Error(err);
        });
    };
  
    render() {

        return (
            <div className="displayData">
                <p>Select a Character to Display more information.</p>
                {/* <p>Name: {this.state.starwarsCharData.name}</p> */}
            </div>
        );
    }
}

export default StarWarsData;