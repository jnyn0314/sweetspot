import React from 'react';
import CounselingForm from './pages/CounselingForm/CounselingForm'; // 필요에 따라 경로 수정
import './App.css';

function Student() {
  return (
    <div className="Student">
      {/* TopNavBar는 필요 없으므로 제거 */}
      <h2>주간 상담일지</h2>
      <CounselingForm />
    </div>
  );
}

export default Student;
