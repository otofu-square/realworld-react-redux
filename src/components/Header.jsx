import React from 'react'

const Header = (props) =>
  <div>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand">
          {props.appName.toLowerCase()}
        </a>
      </div>
    </nav>
  </div>

export default Header
