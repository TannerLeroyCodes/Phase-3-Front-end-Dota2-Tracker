import React from 'react'

function PlayerCard({player, onRemovePlayer, setPlayerName, setPlayerCountry, setPlayerHero, setPlayerTeamId}) {

function handleClick(e){
    setPlayerName(player.name)
    setPlayerCountry(player.country)
    setPlayerHero(player.favorite_hero)
    setPlayerTeamId(player.team_id)
}
function handleDeleteClick(e) {
    fetch(`http://localhost:9292/players/${player.id}`, {"method": "delete"});
    onRemovePlayer(player.id)
}


  return (
      <div className="player-card" onClick={handleClick}>
    <div>Player Name: {player.name}</div>
    <div>Player Country: {player.country}</div>
    <div>Favorite Hero: {player.favorite_hero}</div>
    <div>Team Name: {player.team.name}</div>
    <button onClick={handleDeleteClick} className="player-btn">Delete x</button>
    </div>
  )
}

export default PlayerCard