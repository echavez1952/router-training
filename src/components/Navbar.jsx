import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav style={{display: 'flex', gap: '1rem', padding: '1rem'}}>
      <Link to="/">My Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">My Profile</Link>
    </nav>
    )
}
