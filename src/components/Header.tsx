import * as React from 'react';

interface Props {
  appName: string;
}

const Header = ({ appName }: Props) =>
  <nav className="navbar navbar-light">
    <div className="container">
      <a className="navbar-brand">
        {appName.toLowerCase()}
      </a>
    </div>
  </nav>;

export default Header;
