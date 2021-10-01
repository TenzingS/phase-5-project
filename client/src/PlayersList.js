import React from 'react';
import PlayerContainer from './PlayerContainer';

const PlayersList = ({players, setPlayers}) => {
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
