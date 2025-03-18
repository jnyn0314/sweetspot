import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './pages/Student/Student';
import Login from './components/Login/Login'
function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 "/"에 대한 Route 추가 */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
