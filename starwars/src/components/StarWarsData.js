import React from 'react';

// Display Character Data

function StarWarsData(props) {
  return (
    <div className="displayData">
        <h4>Select a Character to Display more information.</h4>
        <p>Name: {props.characterData.name}</p>
        <p>Gender: {props.characterData.gender}</p>
        <p>Height: {props.characterData.height}</p>
        <p>Mass: {props.characterData.mass}</p>
        <p>Hair Color: {props.characterData.hair_color}</p>
        <p>Skin Color: {props.characterData.skin_color}</p>
        <p>Eye Color: {props.characterData.eye_color}</p>
    </div>
  );
}
export default StarWarsData;

// more JSON results - will need other components to display
  // Home World: {props.characterData.homeworld}
  // Films: {props.characterData.films}
  // Species: {props.characterData.species}
  // Vehicles: {props.characterData.vehicles}
  // Starships: {props.characterData.starships}