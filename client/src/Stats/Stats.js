import React from 'react';
import { useHistory } from 'react-router-dom';
import PlayersList from './PlayersList';
import SearchPlayers from './SearchPlayers';


const Stats = ({user, setUser}) => {
    
    // const [teams, setTeams] = useState([])
    // const [searchTeams, setSearchTeams] = useState([])

    let history = useHistory();

    // useEffect(() => {
    //     fetch('/teams').then(r => {
    //             if (r.ok) {
    //                 r.json().then((data) => setTeams(data.data));
    //             }
    //         });
    //     }, []);
                    

    // function searchInputTeams(input){
    //     setSearchTeams(input)
    // }

    // function filterSearchTeams(){
    //     if(searchTeams.length > 0){
    //       return teams.filter(team => team.full_name.toLowerCase().includes(searchTeams.toLowerCase()))
    //     } else{
        
    //       return teams
    //     }
    //   }
    
    
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

    // function gotoTeams(){
    //     <Teams />
    //     history.push('/teams')
    // }

    // function gotoPlayers(){
    //     <Players />
    //     history.push('/players')
    // }

    function toPortfolio() {
        history.push('/me')
    }

    return (
        <div>
            <div className='view-wrapper'>
                <button className='viewing-user' onClick={toPortfolio}>{user.name}</button>
                <button onClick = {logOut} >Log Out</button>
            </div>
            <button onClick = {goDiscussion} >Go to Discussion Board</button>
            <h1 className='nba-today'>NBA Stats Today</h1>
            <div>
                {/* <SearchTeams /> */}
                <SearchPlayers />
                {/* <TeamsList teams={filterSearchTeams()} /> */}
                <PlayersList />
               

            </div>
        </div>
    );
}

export default Stats;
