import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Teams from './Teams';
import Players from './Players';

const Stats = ({user, setUser}) => {
    
    const [teams, setTeams] = useState([])
    const [searchTeams, setSearchTeams] = useState([])


    let history = useHistory();
    
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

    function gotoTeams(){
        <Teams />
        history.push('/teams')
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
            <br/>
            <button onClick = {gotoTeams} >Search Teams</button>
            <button onClick = {gotoPlayers} >Search Players</button>
            <h1>NBA Stat Leaders</h1>
        </div>
    );
}

export default Stats;
