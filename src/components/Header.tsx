import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

interface Props {
  appName: string;
  currentUser: User;
}

const LoggedOutView = () =>
  <ul className="nav navbar-nav pull-xs-right">
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/login" className="nav-link">
        Sign in
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/register" className="nav-link">
        Sign up
      </Link>
    </li>
  </ul>;

const LoggedInView = ({ currentUser }: { currentUser: User }) =>
  <ul className="nav navbar-nav pull-xs-right">
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/editor" className="nav-link">
        <i className="ion-compose" />&nbsp;New Post
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/settings" className="nav-link">
        <i className="ion-gear-a" />&nbsp;Settings
      </Link>
    </li>
    <li className="nav-item">
      <Link to={`${currentUser.username}`} className="nav-link">
        <img src={currentUser.image!} alt="user-pic" className="user-pic" />
        {currentUser.username}
      </Link>
    </li>
  </ul>;

const Header: React.StatelessComponent<Props> = ({ appName, currentUser }) =>
  <nav className="navbar navbar-light">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {appName.toLowerCase()}
      </Link>
    </div>
    {!currentUser
      ? <LoggedOutView />
      : <LoggedInView currentUser={currentUser} />}
  </nav>;

export default Header;
