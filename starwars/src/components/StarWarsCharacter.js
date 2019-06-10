import React from 'react';

// Have at least one list element for each star wars character in the data set.

function StarWarsCharacter(props) {

    const clickHandler = () => props.getCharacterData(props.character.url);

    return (
        <li onClick={clickHandler} >
            {props.character.name}
        </li>
    );
}
export default StarWarsCharacter;