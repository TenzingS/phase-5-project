import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchTeams from './SearchTeams'
import TeamsList from './TeamsList';
import PlayersList from './PlayersList';
import SearchPlayers from './SearchPlayers';

const Stats = ({user, setUser}) => {
    
    const [teams, setTeams] = useState([])
    const [searchTeams, setSearchTeams] = useState('')
    const [players, setPlayers] = useState([])
    const [searchPlayers, setSearchPlayers] = useState([])

    let history = useHistory();

    useEffect(() => {
        fetch('/teams')
        .then(res => res.json())
        .then(data => setTeams(data))
        },[])

    function searchInputTeams(input){
        setSearchTeams(input)
    }

    function filterSearchTeams(){
        if(searchTeams.length > 0){
          return teams.filter(team => team.header.toLowerCase().includes(searchTeams.toLowerCase()))
        } else{
          return teams
        }
      }
    
    useEffect(() => {
        fetch('/players')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    function searchInputPlayers(input){
        setSearchPlayers(input)
    }

    function filterSearchPlayers(){
        if(searchPlayers.length > 0){
          return players.filter(player => player.header.toLowerCase().includes(searchPlayers.toLowerCase()))
        } else{
          return players
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

    return (
        <div>
            <h4>Welcome {user.name}!</h4>
            <button onClick = {goDiscussion} >Go to Discussion Board</button>
            <button onClick = {logOut} >Log Out</button>
            <h1>NBA Stats Today</h1>
            <div>
                <SearchTeams searchInput={searchInputTeams}/>
                <SearchPlayers searchInput={searchInputPlayers} />
                <TeamsList teams={filterSearchTeams} setTeams={setTeams}/>
                <PlayersList players={filterSearchPlayers} setPlayers={setPlayers} />
               

            </div>
        </div>
    );
}

export default Stats;
