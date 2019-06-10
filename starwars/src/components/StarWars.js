import React from 'react';
import StarWarsList from './StarWarsList';
import StarWarsData from './StarWarsData';
import './StarWars.css';

// A list of Star Wars Characters rendered to the screen.
    
function StarWars(props) {
    return (
        <div className="main">
            <StarWarsList list={props.list} getCharacterData={props.getCharacterData} />
            <StarWarsData characterData={props.characterData}/>
        </div>
    );
}

export default StarWars;