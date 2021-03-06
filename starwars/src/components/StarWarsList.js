import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';
import './StarWars.css';

// A list of Star Wars Characters rendered to the screen.
    
function StarWarsList(props) {
    return (
        <div className="list">
            <ul>
                {props.list.map( item => {
                    return (
                    <StarWarsCharacter character={item} key={item.url} />
                );})}
            </ul>
        </div>
    );
}

export default StarWarsList;