import React from 'react';

// Have at least one list element for each star wars character in the data set.

function StarWarsData(props) {

    return (
        <div className="displayData">
            Select a Character to Display more information.            
            {console.log(props.list.name)}
        </div>
    );
}
export default StarWarsData;