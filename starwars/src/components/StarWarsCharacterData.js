import React from 'react';

// Have at least one list element for each star wars character in the data set.

function StarWarsCharacterData(props) {

    return (
        <div>
            {props.character.name}
        </div>
    );
}
export default StarWarsCharacterData;