import React from 'react';
import TeamContainer from './TeamContainer';

const TeamsList = ({teams, setTeams}) => {
    return (
        <div>
            {teams.map(team => (
                <TeamContainer
                key = {team.id}
                team = {team} />
            ))}
        </div>
    );
}

export default TeamsList;
