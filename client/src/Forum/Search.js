import React, {useState} from "react";

function Search({ searchInput }) {
  const [userInput, setUserInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    searchInput(userInput)
  }

  return (
      <form onSubmit= {handleSubmit}>
        <input 
          className="search"
          id="search-bar" 
          type="text" 
          placeholder="Search Posts" 
          value={userInput} 
          onChange={e => setUserInput(e.target.value)}/>
          <button type="submit">🔍</button>
      </form>
  );
}

export default Search;