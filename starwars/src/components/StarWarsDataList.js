import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

// A list of Star Wars Characters rendered to the screen.
    
class StarWarsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        starwarsCharData: []
      };
    }
  
    // componentDidMount(id) {
    //   this.getCharacters('https://swapi.co/api/people/' + id);
    // }
  
    getCharacterData = URL => {
      // feel free to research what this code is doing.
      // At a high level we are calling an API to fetch some starwars data from the open web.
      // We then take that data and resolve it our state.
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ starwarsCharData: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
    };
  
    render() {

        return (
            <div className="datalist">
                {props.list.map( item => {
                    return (
                    <StarWarsCharacterData character={item} key={item.id} />
                );})}
            </div>
        );
    }
}

export default StarWarsList;