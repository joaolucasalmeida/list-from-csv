import React from "react"
import "./HeaderBar.css"
import logo from "../../assets/logo.png"

const HeaderBar = (props) => {
    return (
        <header className="header-bar-container">
            <img src={logo} alt="logo" className="header-bar-logo"></img>
        </header>
    )
}

export default HeaderBar;

