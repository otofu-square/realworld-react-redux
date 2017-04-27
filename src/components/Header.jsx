import React from 'react'

const Header = ({ appName }) =>
  <div>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand">
          {appName.toLowerCase()}
        </a>
      </div>
    </nav>
  </div>

export default Header
