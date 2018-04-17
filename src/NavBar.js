import React from 'react'
import './NavBar.css'

class NavBar extends React.Component{
  render() {
    return (

        <div className="topnav">

        <a href="" onClick={this.props.setContentHome}>Home</a>
        <a href="" onClick={this.props.setContentAbout}>About</a>
        <a href="" onClick={this.props.setContentProfile}>Profile</a>
        <a href="" onClick={this.props.setContentResume}>Resume</a>

        <div className="topnav-right">
        <a className="nav-link" href="https://www.facebook.com/shaoyang.yan.3">
          <img
            src={require("./assets/facebook.png")}
            className="nav-link-image"
            alt = "FB"/>
        </a>
        <a
        href="https://www.linkedin.com/in/shaoyang-yan/"
        className="nav-link">
          <img
            className="nav-link-image"
            src={require("./assets/linkedin.jpg")}
            alt = "L"/>
        </a>
        <a
        href="https://github.com/TimYanSY"
        className="nav-link">
          <img
            className="nav-link-image"
            src={require("./assets/github.png")}
            alt = "Git"/>
        </a>
        </div>
        </div>
    );
  }
}

export default NavBar;
