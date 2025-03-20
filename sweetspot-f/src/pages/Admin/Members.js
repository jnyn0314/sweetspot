import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import UserManagement from '../../components/UserManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserForm from './AddUserForm'; // AddUserForm import

function Members() {
  return (
      <div className="admin-dashboard">
        <Sidebar />
        <main className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<UserManagement />} />
            <Route path="/add-user" element={<AddUserForm />} />
          </Routes>
        </main>
      </div>
  );
}

export default Members;
