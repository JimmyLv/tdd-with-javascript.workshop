import React from 'react'
import logo from '../logo.svg'
import './Header.css'

const Header = ({ title }) => (
  <div className="header">
    <img className="header-logo" src={logo} alt="logo" />
    <span className="header-title">{title}</span>
  </div>
)

export default Header