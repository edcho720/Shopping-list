import React from 'react'
import {Link} from "react-router-dom"



function Header() {

  const styles = {
    textDecoration: 'none',
    color: 'white',
    textShadow: '1px 1px 3px black',
  }

  return (
    <nav className="header">
        <Link className="title" style={styles} to="/"><h1>Shopping list</h1></Link>
        <ul className="menu">
            <Link style={styles} to="/list"><li>Saved Lists</li></Link>
            <Link style={styles} to="/about"><li>About</li></Link>
            <Link style={styles} to="/map"><li>Map</li></Link>
        </ul>
    </nav>
  )
}

export default Header