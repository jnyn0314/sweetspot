import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Members from './pages/Admin/Members'; // pages/Student로 수정
import TeacherManagement from './pages/Admin/TeacherManagement'; // Admin 폴더 반영
import StudentManagement from './pages/Admin/StudentManagement'; // Admin 폴더 반영
import AddUserForm from './pages/Admin/AddUserForm';
import LearningStatus from './pages/Student/LearningStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* 중첩 Route: /admin 하위 경로 처리 */}
        <Route path="/admin" element={<Members />}>
          <Route path="teacher-management" element={<TeacherManagement />} />
          <Route path="student-management" element={<StudentManagement />} />
          <Route path="learning-status" element={<LearningStatus />} />
          <Route path="student-management" element={<StudentManagement />} />
          <Route path="add-user" element={<AddUserForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
