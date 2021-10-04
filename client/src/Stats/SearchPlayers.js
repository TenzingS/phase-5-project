import React from 'react';
import { useState } from "react";

const SearchPlayers = ({searchInput}) => {
    const [userInput, setUserInput] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
      searchInput(userInput)
    }
  
    return (
        <form onSubmit= {handleSubmit}>
          <input 
            id="search-bar" 
            type="text" 
            placeholder="Search Players" 
            value={userInput} 
            onChange={e => setUserInput(e.target.value)}/>
            <button type="submit">🔍</button>
        </form>
    );
}

export default SearchPlayers;
