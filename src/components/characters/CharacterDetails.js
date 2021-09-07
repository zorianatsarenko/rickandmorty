import React from 'react'

function CharacterDetails({charName, status, species, gender}) {
    return (
        <div>
            <h1>{charName}</h1>
            <h2>{species}</h2>
            <h3>{status}</h3>
            <p>{gender}</p>
        </div>
    )
}

export default CharacterDetails
