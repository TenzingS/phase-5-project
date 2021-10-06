import React from 'react';
import TeamContainer from './TeamContainer';

const TeamsList = ({teams, players}) => {


    return (
        <div>
            {teams.map(team => (
                        <TeamContainer
                            key = {team.id}
                            team = {team} 
                            players={players} />
            ))};
        </div>
    )
}

export default TeamsList;
