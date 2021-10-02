import React from 'react';

const TeamContainer = ({team}) => {
    return (
        <div>
            <ul>
            {team.full_name}
            {team.abbreviation}
            {team.conference}
            {team.division}
            </ul>
        </div>
    );
}

export default TeamContainer;
