import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <a href="#" className="nav-link">
          <i className="fas fa-users-cog"></i>
          강사/학생 관리
        </a>
        <a href="#" className="nav-link">
           <i className="fas fa-chart-line"></i>
           학습 현황
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
