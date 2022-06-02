import React, {useState} from 'react'

function PlayerUpdateForm({players}) {

    const [playerName, setPlayerName] = useState("")
    const [playerCountry, setPlayerCountry] = useState("")
    const [playerHero, setPlayerHero] = useState("")
    const [playerTeamId, setPlayerTeamId] = useState("")
    const [searchInput, setSearchInput] = useState('')
    
    const searchedPlayer = players.filter(player => {
        return player.name.includes(searchInput)
    })

    function handleUpdateSubmit(e){

        e.preventDefault(); 

        const obj = {
          name: playerName, 
          country: playerCountry,
          favorite_hero: playerHero,
          team_id: playerTeamId
        }
        fetch(`http://localhost:9292/players/${players.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj)
          })
    }


  return(
    <>
    <h1> Dota2 Player Update Form</h1>
    <h3>Update Player information</h3>

    <input className="search"
       type="text"
       id="search"
       placeholder="Type a player ID to pull up their information"
       value={searchInput} 
       onChange={(e) => setSearchInput(e.target.value)} 
       />

    <div className="submitForm">
        <form onSubmit={handleUpdateSubmit}>
            <label>Enter Player Name </label>
            <input className="input" type="text" placeholder="Player Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
            <label>Enter Player Country </label>
            <input className="input" type="text" placeholder="Player Country" value={playerCountry} onChange={(e) => setPlayerCountry(e.target.value)}></input>
            <label>Enter Player Favorite Hero </label>
            <input className="input" type="text" placeholder="Player's Favorite Hero" value={playerHero} onChange={(e) => setPlayerHero(e.target.value)}></input>
            <label>Enter Player Team ID </label>
            <input className="input" type="text" placeholder="Player's Team ID" value={playerTeamId} onChange={(e) => setPlayerTeamId(e.target.value)}></input>
            <button type="submit" >Update the Dota Player!</button>
        </form>


    </div>
    </>

)
}

export default PlayerUpdateForm