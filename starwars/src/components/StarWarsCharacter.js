import React from 'react';

// Have at least one list element for each star wars character in the data set.

function StarWarsCharacter(props) {

    const clickHandler = () => {
        // I'd like a clickHandler when clicked pulls up more data... 
        props.getCharacterData(props.character.url);
    };

    return (
        <li onClick={clickHandler} >
            {props.character.name}
        </li>
    );
}
export default StarWarsCharacter;