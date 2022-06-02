import React from 'react'
import {NavLink} from "react-router-dom"


function NavBar() {
  return (
    <div className={'navBar'}>
      <NavLink className={'navBarLink'} to="/"> Home    </NavLink>
      <NavLink className={'navBarLink'} to="/teams" >  Teams  </NavLink> 
      <NavLink className={'navBarLink'} to="/players" > Player Add and Delete Form  </NavLink>
      <NavLink className={'navBarLink'} to="/players/update-form" > Player Update Form </NavLink>
      </div>
  )
}

export default NavBar