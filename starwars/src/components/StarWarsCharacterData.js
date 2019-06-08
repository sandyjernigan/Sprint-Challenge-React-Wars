import React from 'react';

// Display Character data based off the URL from the character component
    
class StarWarsCharacter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        starwarsCharData: []
      };
    }

    componentDidMount() {
        this.getCharacters('https://swapi.co/api/people/1/');
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
          throw new Error(err);
        });
    };
  
    render() {

        return (
            <div className="characterData">
            </div>
        );
    }
}

export default StarWarsCharacter;



// import React from 'react';

// // Have at least one list element for each star wars character in the data set.

// function StarWarsData() {

//     return (
//         <div className="displayData">
//             Select a Character to Display more information.
//         </div>
//     );
// }
// export default StarWarsData;
// //{console.log(props.list.name)}