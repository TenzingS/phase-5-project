import React from 'react';
import PlayerContainer from './PlayerContainer';

const PlayersList = ({players, team}) => {

    return (
        <div>
            {team}
            <br/>
            {players.map((player, key) => (
                <PlayerContainer
                key = {player.id}
                player = {player} />
            ))}
        </div>
    );
}

export default PlayersList;
