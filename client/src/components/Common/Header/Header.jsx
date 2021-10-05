import React from 'react'
import '../Header/Header.css'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'


function Header() {
    return (
        <div>
        <div className="header-background">
        <div className="header-container">
        <Link to="/" className="logo"><img src={logo}/></Link>
        <div className="grow"></div>
        <Link to="/UrlPage" className="header-flex-box">Url Service</Link>
        <Link to="/BoardPage" className="header-flex-box">Board Page</Link>
        <Link to="/LogIn" className="header-flex-box">Log in</Link>
        <Link to="/SignUp" className="header-flex-box">Sign Up</Link>
        </div>
        </div>
        </div>
    )
}

export default Header
