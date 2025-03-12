import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './Student';
import About from './About';
import Facilities from './pages/Facilities/Facilities';
import FAQ from './pages/FAQ/Faq';
import Consult from './pages/Consult/Consult';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 "/"에 대한 Route 추가 */}
        <Route path="/" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/consult" element={<Consult />} />
      </Routes>
    </Router>
  );
}

export default App;
