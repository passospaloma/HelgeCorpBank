import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>HELGECORP BANK</h1>
      <div className="links">
        <Link to="/account" className="link">
          <strong>Account</strong>
        </Link>
        <Link to="/profile" className="link">
          <strong>Profile</strong>
        </Link>
        <Link to="/logout" className="link">
          <strong>Logout</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;