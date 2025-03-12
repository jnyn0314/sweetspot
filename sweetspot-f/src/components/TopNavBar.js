import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNavBar.css';

function TopNavBar() {
  return (
    <nav id="nav2">
      <Link to="/">Logo</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/faq">F&Q</Link></li>
        <li><Link to="/consult">Consult</Link></li>
      </ul>
    </nav>
  );
}

export default TopNavBar;
