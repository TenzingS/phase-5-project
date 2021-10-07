import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchTeams from './SearchTeams'
import TeamsList from './TeamsList';
import Players from './Players';

const Teams = ({user, setUser}) => {
    const [teams, setTeams] = useState([])
    const [searchTeams, setSearchTeams] = useState([])


    let history = useHistory();

    useEffect(() => {
        fetch('/teams').then(r => {
                if (r.ok) {
                    r.json().then((data) => setTeams(data.data));
                }
            });
        }, []);
                    

    function searchInputTeams(input){
        setSearchTeams(input)
    }

    function filterSearchTeams(){
        if(searchTeams.length > 0){
          return teams.filter(team => team.full_name.toLowerCase().includes(searchTeams.toLowerCase()))
        } else{
        
          return teams
        }
      }
    
    
    function goDiscussion(){
        history.push('/home')
    }

    function logOut() {
        fetch('/logout', {
            method: 'DELETE' })
        .then(r => {
            if (r.ok) {
            setUser(null);
            }
        });
        history.push('/')
        }

        function gotoPlayers(){
            <Players />
            history.push('/players')
        }
    

    return (
        <div>
            <h4>Welcome {user.name}!</h4>
            <button onClick = {goDiscussion} >Go to Discussion Board</button>
            <button onClick = {logOut} >Log Out</button>
            <h1>NBA Stats Today</h1>
            <div>
                <SearchTeams searchInput={searchInputTeams}/>
                <button onClick = {gotoPlayers} >Search Players</button>
                <TeamsList teams={filterSearchTeams()} />    

            </div>
        </div>
    );
}

export default Teams;
