import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

// A list of Star Wars Characters rendered to the screen.
    
function StarWarsList(props) {

    const pageHandlerLeft = () => { };

    const pageHandlerRight = () => { };

    return (
        <div className="list">
            <div className="left arrow" onClick={pageHandlerLeft} >&laquo;</div>
            <ul>
                {props.list.map( item => {
                    return (
                    <StarWarsCharacter character={item} key={item.url} getCharacterData={props.getCharacterData} />
                );})}
            </ul>
            <div className="right arrow" onClick={pageHandlerRight} >&raquo;</div>
        </div>
    );
}

export default StarWarsList;