import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Members from './pages/Admin/Members'; // pages/Student로 수정
import TeacherManagement from './pages/Admin/TeacherManagement'; // Admin 폴더 반영
import StudentManagement from './pages/Admin/StudentManagement'; // Admin 폴더 반영
import AddUserForm from './pages/Admin/AddUserForm';
import LearningStatus from './pages/Student/LearningStatus';
import TeacherDetails from './pages/Admin/TeacherDetails';  // TeacherDetails 컴포넌트 추가
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Members />}>
          <Route path="teacher-management" element={<TeacherManagement />}>
            <Route path=":id" element={<TeacherDetails />} />  {/* TeacherDetails 중첩 */}
          </Route>
          <Route path="student-management" element={<StudentManagement />} />
          <Route path="/admin/learning-status" element={<LearningStatus />} />
          <Route path="add-user" element={<AddUserForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;