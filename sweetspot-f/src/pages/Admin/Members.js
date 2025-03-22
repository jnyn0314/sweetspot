import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom'; // Outlet만 사용

function Members() {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main className="main-content">
        <Outlet /> {/* 하위 Route를 렌더링 */}
      </main>
    </div>
  );
}

export default Members;
