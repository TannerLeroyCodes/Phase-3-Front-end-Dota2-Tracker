import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import TeamsPage from './TeamsPage';
import PlayerEditForm from './PlayerEditForm';
import ErrorPage from './ErrorPage';
import NavBar from './NavBar';
import PlayerUpdateForm from './PlayerUpdateForm';




function App() {

  const [teams, setTeams] =useState([])
  const [players, setPlayers] =useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/teams")
    .then(r => r.json())
    .then(data => setTeams(data))
  }, [])

  useEffect(()=> {
    fetch("http://localhost:9292/players")
    .then(r => r.json())
    .then(data => setPlayers(data))
  }, [])

function addTeam(obj){
  const arr = [...teams, obj]
  setTeams(arr)
}

function addPlayer(obj){
  const arr = [...players, obj]
  setPlayers(arr)
}
function onRemovePlayer(id){
  const filteredPlayers = players.filter(player => player.id !== id )
  setPlayers(filteredPlayers)

}


  return (
    <Router>
      <NavBar className={'navbar'} />
      <Routes>
        <Route exact path={"/"} element={<HomePage/>}/>
        <Route exact path={"/teams"} element={<TeamsPage teams={teams} addTeam={addTeam}/>}/>
        <Route exact path={"/players"} element={<PlayerEditForm  players={players} setPlayers={setPlayers} onRemovePlayer={onRemovePlayer} addPlayer={addPlayer}/>}/>
        <Route exact path={"/players/update-form"} element={<PlayerUpdateForm  players={players}/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
