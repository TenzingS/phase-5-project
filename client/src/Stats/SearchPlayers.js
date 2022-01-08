import React, {Component} from 'react';
import axios from "axios";

class SearchPlayers extends Component {
  constructor(props){
      super(props)
      this.state={
        playerName: null,
        playerStats: {},
        player:[],
        playerTeam:[]
      }
    }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId()
    this.getPlayer()
    console.log(this.state.playerName)
  }
  
  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if(replace.length > 0){
      this.setState({playerName: replace})
    } else {
      alert("Please type players name!")
    }
  }

  getPlayer = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      console.log(res.data.data[0])
      this.setState({player: res.data.data[0]})
      this.setState({playerTeam: res.data.data[0].team})
    }).catch(err => {
      console.log(err)
    })
  }
  
    getPlayerId = () => {
      axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
      .then(async res => {
        console.log(res.data.data)
        if(res.data.data[0] === undefined){
          alert("This player is either injured or hasn't played yet!")
        } else if(res.data.data.length > 1){
          alert("Pleases specify the name more!")
        } else{
          await this.getPlayerStats(res.data.data[0].id)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  
    getPlayerStats = (playerId) => {
      axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`)
      .then(async res => {
        console.log(res.data.data)
        this.setState({ playerStats: res.data.data[0]})
      }).catch(err => {
        console.log(err)
      })
    }
    
    render(){
    return (
      <div className="App">
       <form onSubmit={this.handleSubmit}>
         <label>
           Name: 
           <input 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter players name"
           />
         </label>
         <button type="submit" value="Submit">🔍</button>
       </form>
       <hr/>
       <div className="playercard" >
       Name: {this.state.player["first_name"]} {this.state.player["last_name"]}
       <br/>
       Height: {this.state.player["height_feet"]} feet {this.state.player["height_inches"]} inches
       <br/>
       Position: {this.state.player["position"]}
       <br/>
       Team: {this.state.playerTeam["full_name"]}
       <br />
       Conference: {this.state.playerTeam["conference"]}
       
       <br />
       Games played: {this.state.playerStats["games_played"]}
       <br />
       Points per game: {this.state.playerStats["pts"]}
       <br />
       Rebounds per game: {this.state.playerStats["reb"]}
       <br />
       Assists per game: {this.state.playerStats["ast"]}
       <br />
       Steals per game: {this.state.playerStats["stl"]}
       <br />
       Blocks per game: {this.state.playerStats["blk"]}
       <br />
       Turnovers per game: {this.state.playerStats["turnover"]}
       <br />
       FG%: {this.state.playerStats["fg_pct"]}
       <br />
       3pt%: {this.state.playerStats["fg3_pct"]}
       <br />
       FT%: {this.state.playerStats["ft_pct"]}
       </div>
      </div>
    );
  }
}

export default SearchPlayers;
