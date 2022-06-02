import React, {useState} from 'react'
import TeamCard from './TeamCard'

function TeamsPage({teams, addTeam}) {

const [teamName, setTeamName] = useState("")
const [teamCountry, setTeamCountry] = useState("")



const arrOfTeams = teams.map(team => <TeamCard key={team.id} team={team} />);

  function handleSubmit(e){
    e.preventDefault(); 
    const obj = {
      name: teamName, 
      country: teamCountry,
    }
    fetch("http://localhost:9292/teams", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(obj)
    })
    addTeam(obj)

    setTeamName("")
    setTeamCountry("")
}



  return (
      <>
    <h1>Dota2 Teams Page</h1>
    <ul>{arrOfTeams}</ul>

    <form onSubmit={handleSubmit}>
        <header>Add a new Team</header>
        <label> Enter Team Name</label>
        <input className={"input"} type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)}></input>
        <label>Enter Team Country</label>
        <input className={"input"} type="text" placeholder="Team Country" value={teamCountry} onChange={(e) => setTeamCountry(e.target.value)}></input>
        <button type="submit">Add a Dota2 Team</button>
    </form>
    </>
  )
}

export default TeamsPage