import React from 'react'

type Props = {
  appName: string,
}

const Header = ({ appName }: Props) => (
  <div>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand">
          {appName.toLowerCase()}
        </a>
      </div>
    </nav>
  </div>
)

export default Header
