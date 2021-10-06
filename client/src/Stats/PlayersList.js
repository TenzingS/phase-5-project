import React from 'react';
import PlayerContainer from './PlayerContainer';

const PlayersList = ({players, team}) => {

    console.log(players)
    return (
        <div>
            {team}
            <br/>
            {players.map(player => (
                <PlayerContainer
                key = {player.id}
                player = {player} />
            ))}
        </div>
    );
}

export default PlayersList;
