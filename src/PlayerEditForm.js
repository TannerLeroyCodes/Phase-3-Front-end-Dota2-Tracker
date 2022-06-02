import React, {useState} from 'react'
import PlayerCard from './PlayerCard'

function PlayerEditForm({ players, addPlayer, onRemovePlayer}) {

const [playerName, setPlayerName] = useState("")
const [playerCountry, setPlayerCountry] = useState("")
const [playerHero, setPlayerHero] = useState("")
const [playerTeamId, setPlayerTeamId] = useState("")


    function handleAdd(e){
        e.preventDefault(); 

        const obj = {
          name: playerName, 
          country: playerCountry,
          favorite_hero: playerHero,
          team_id: playerTeamId
        }
        
        fetch("http://localhost:9292/players", {
          method: "POST",
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(obj)
        })
        addPlayer(obj)
    
        setPlayerName("")
        setPlayerCountry("")
        setPlayerHero("")
        setPlayerTeamId("")
    }

    
    const arrOfPlayers = players.map(player => <PlayerCard key={player.id} onRemovePlayer={onRemovePlayer} player={player} setPlayerName={setPlayerName} setPlayerCountry={setPlayerCountry} setPlayerHero={setPlayerHero} setPlayerTeamId={setPlayerTeamId}/>)


  return (
      <>
      <h1> Dota2 Player Add and Delete Form</h1>
      <h3>Create, Read, and Delete Players</h3>

      <div className="submitForm">
          <form onSubmit={handleAdd}>
              <label>Enter Player Name </label>
              <input className="input" type="text" placeholder="Player Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
              <label>Enter Player Country </label>
              <input className="input" type="text" placeholder="Player Country" value={playerCountry} onChange={(e) => setPlayerCountry(e.target.value)}></input>
              <label>Enter Player Favorite Hero </label>
              <input className="input" type="text" placeholder="Player's Favorite Hero" value={playerHero} onChange={(e) => setPlayerHero(e.target.value)}></input>
              <label>Enter Player Team ID </label>
              <input className="input" type="text" placeholder="Player's Team ID" value={playerTeamId} onChange={(e) => setPlayerTeamId(e.target.value)}></input>
              <button type="submit" >Add the Dota Player!</button>
          </form>

        <ul>{arrOfPlayers}</ul>

      </div>
      </>
  
  )
}

export default PlayerEditForm