import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 사이드바 토글 버튼 (사이드바 바깥에 위치) */}
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <nav className="sidebar-nav">
          {/* 강사/학생 관리 섹션 */}
          <div className="nav-section">
            <span className="nav-title">강사/학생 관리</span>
            <ul className="nav-submenu">
              <li>
                <Link to="/admin/teacher-management" className="nav-link">
                  강사 관리
                </Link>
              </li>
              <li>
                <Link to="/admin/student-management" className="nav-link">
                  학생 관리
                </Link>
              </li>
            </ul>
          </div>

          {/* 학습 현황 섹션 */}
          <div className="nav-section">
            <span className="nav-title">학습 현황</span>
            <ul className="nav-submenu">
              <li>
                <Link to="/admin/learning-status" className="nav-link">
                  학습 현황표
                </Link>
              </li>
              <li>
                <Link to="/admin/mock-test-trends" className="nav-link">
                  모의고사 추이
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
