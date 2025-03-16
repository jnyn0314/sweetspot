import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './pages/Student/Student';
import Home from './pages/Home/Home';
import Programs from './pages/Programs/Programs';
import Facilities from './pages/Facilities/Facilities';
import FAQ from './pages/FAQ/Faq';
import Consult from './pages/Consult/Consult';
import Login from './components/Login/Login';
import FindIdPassword from './components/Login/FindIdPassword';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 "/"에 대한 Route 추가 */}
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findidpwd" element={<FindIdPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
