import React, {useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayPlatformStats from './components/Charts/DisplayPlatformStats';

function App() {

  const [videoGames, setVideoGames] = useState([]);

useEffect(() => {
  getVideoGames();
}, []);

async function getVideoGames() {
  try{
    const response = await axios.get("https://localhost:7260/api/games");
    setVideoGames(response.data);
  }
  catch(error){
    console.log(`ERROR in getVideoGames EXCPETION: ${error}`)
  }
}

  return (
    <div className="App">
      <SearchBar videoGames={videoGames}/>
      <DisplayPlatformStats videoGames={videoGames}/>
   
    </div>
  );
}

export default App;



