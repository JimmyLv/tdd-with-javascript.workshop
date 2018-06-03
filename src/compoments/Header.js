import React from 'react'
import logo from '../logo.svg'
import './Header.css'

const Header = () => (
  <div className="header">
    <img className="header-logo" src={logo} alt="logo" />
    <h3 className="header-title">React Shopping Cart</h3>
  </div>
)

export default Header