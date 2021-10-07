import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayersList from './PlayersList';
import SearchPlayers from './SearchPlayers';
import Teams from './Teams';

const Players = ({setUser}) => {
    const [players, setPlayers] = useState([])
    const [searchPlayers, setSearchPlayers] = useState([])

    let history = useHistory();

    useEffect(() => { 
        fetch('/players')
        .then(r => {
            if (r.ok) {
                r.json().then((data) => setPlayers(data.data));
            }
        });
    }, []);

    
    // useEffect(() => {
    //     fetch(`/players/${input}`)
    //     .then(r => {
    //         if (r.ok) {
    //             r.json().then((data) => setSearchPlayers(data.data));
    //         }
    //     });
    // }, []);


    function searchInputPlayers(input){
        setSearchPlayers(input)
    }

    function filterSearchPlayers(){
        if(searchPlayers.length > 0){
            // useEffect(() => {
            //     fetch(`/players/${searchPlayers}`)
            //     .then(r => {
            //         if (r.ok) {
            //             r.json().then((data) => setPlayers(data.data));
            //         }
            //     });
            // }, []);
            return players
        //   return players.filter(player => player.first_name.toLowerCase().includes(searchPlayers.toLowerCase()))
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

        function gotoTeams(){
            <Teams />
            history.push('/teams')
        }

    return (
        <div>
            <h2>Search for NBA Players</h2>
            <button onClick = {goDiscussion} >Go to Discussion Board</button>
            <button onClick = {logOut} >Log Out</button>
            <div>
            <SearchPlayers searchInput={searchInputPlayers} />
            <button onClick = {gotoTeams} >Search Teams</button>
            <PlayersList players={filterSearchPlayers()} />
            </div>
        </div>
    );
}

export default Players;
