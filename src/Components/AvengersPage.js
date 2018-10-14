import React from 'react';
import avengers from "../data"

function AvengersPage(props) {
    const id = props.match.params.id;
    const avenger = avengers.find(avenger => `${avenger.id}` === id);
    return (
        <div>
            <h1>Avenger Page</h1>
            <img className="character-image" 
            src={avenger.img}
             alt={avenger.name} />
            <div className="character-info-wrapper">
                <h1>{avenger.name}</h1>
                <h4>"{avenger.nickname}"</h4>
                <p>{avenger.description}</p>
            </div>

         </div>
    )
}

export default AvengersPage;