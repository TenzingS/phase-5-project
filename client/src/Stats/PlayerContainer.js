import React from 'react';

const PlayerContainer = ({key, player}) => {
    return (
        <div>
            Name: {player.first_name} {player.last_name}
            <br/>
            Team: {player.team.full_name}
            <br/>
            Height: {player.height_feet}' {player.height_inches}"
            <br/>
            Weight:{player.weight_pounds}
            <br/>
            Position: {player.position}
            <hr/>
        </div>
    );
}

export default PlayerContainer;
