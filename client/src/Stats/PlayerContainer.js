import React from 'react';

const PlayerContainer = ({key, player}) => {
    return (
        <div>
            {player.first_name} {player.last_name}
            {player.team.full_name}
            {player.height_feet}{player.height_inches}
            {player.weight_pounds}
        </div>
    );
}

export default PlayerContainer;
