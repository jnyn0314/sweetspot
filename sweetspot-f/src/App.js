import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import Members from './pages/Admin/Members'
import Student from './pages/Student/Student';
function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 "/"에 대한 Route 추가 */}
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Members />} />
        <Route path="/dashboard" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
