import React from "react";
import logo from './images/spotify.png'
import logoutImage from './images/power-off.png'
import './styles/header.css';

const Header = ({logouthandler})=>{
    return(
        <header>
            <div className="logo_sec">
            <img src={logo} alt="spotify"></img>
            <h1>Spotify</h1>
            </div>
            <div className="logout_sec">        
            <img onClick={logouthandler} src={logoutImage} alt=""/>
            </div>
            </header>
    )
}

export default Header