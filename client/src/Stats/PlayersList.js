import React from 'react';
import PlayerContainer from './PlayerContainer';

const PlayersList = ({players}) => {

    console.log(players)
    return (
        <div>
            {players.map(player => (
                <PlayerContainer
                key = {player.id}
                player = {player} />
            ))}
        </div>
    );
}

export default PlayersList;
