import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">User Management</h1>
        <div className="header-actions">
          <div className="notification-bell">
            <i className="fas fa-bell"></i>
          </div>
          <div className="admin-info">
            <span className="admin-name">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
