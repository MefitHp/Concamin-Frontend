import React, { Component } from 'react'
import { Toolbar, ToolbarGroup, MenuItem, IconMenu, RaisedButton, IconButton, Avatar } from 'material-ui'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import Label from '../../assets/Label.png'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Toolbar style={{ backgroundColor: "#0097A7" }} >
          <ToolbarGroup>
            <Link to="/" className="link-nav">
              <img style={{ height: "40px" }} src={Logo} alt="" />
              <img style={{ width: "100px", marginBottom: "12px" }} src={Label} alt="" />
            </Link>
          </ToolbarGroup>
          <ToolbarGroup>
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Perfil" />
              <MenuItem primaryText="Prefencias" />
              <MenuItem primaryText="Cerrar Sesión" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </div >
    )
  }
}

export default Navbar