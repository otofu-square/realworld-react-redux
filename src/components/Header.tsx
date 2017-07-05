import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  appName: string;
}

const Header: React.StatelessComponent<Props> = ({ appName }) =>
  <nav className="navbar navbar-light">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {appName.toLowerCase()}
      </Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Header;
