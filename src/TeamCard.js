import React from 'react'

function TeamCard({team}) {
  return (
    <div className="card">
      <div>Team Name: {team.name}</div>  
      <div>Team ID: {team.id}</div>
      <div>Team Country: {team.country}</div>
      <div>Team Players: { team.players ? team.players.map (player => " -" + player.name) : "add and update players using the Player Update Form"}</div>



    </div>
  )
}

export default TeamCard