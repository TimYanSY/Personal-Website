import React from 'react'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="topnav">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Profile</a>
        <a href="">Resume</a>
        <div className="topnav-right">
        <a
        href="https://www.facebook.com/shaoyang.yan.3"
        style={{
          padding: 0,
        }}>
          <img
          style={{
            flex: 1,
            margin: 0,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 7,
            paddingBottom: 7,
            width: 30,
            height: 30}}
            src={require("./assets/facebook.png")}
            alt = ""/>
        </a>
        <a
        href="https://www.linkedin.com/in/shaoyang-yan/"
        style={{
          padding: 0,
        }}>
          <img
          style={{
            flex: 1,
            margin: 0,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 7,
            paddingBottom: 7,
            width: 30,
            height: 30}}
            src={require("./assets/linkedin.jpg")}
            alt = ""/>
        </a>
        <a
        href="https://github.com/TimYanSY"
        style={{
          padding: 0,
        }}>
          <img
          style={{
            flex: 1,
            margin: 0,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 7,
            paddingBottom: 7,
            width: 30,
            height: 30}}
            src={require("./assets/github.png")}
            alt = ""/>
        </a>
        </div>
        </div>
    );
}
