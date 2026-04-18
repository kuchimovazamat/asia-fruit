import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <h1 className="company-name">ASIA FRUITE</h1>
        <p className="company-tagline">Premium tabiiy meva sharbatlari</p>
      </Link>
    </header>
  )
}

export default Header
