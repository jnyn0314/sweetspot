import React, { useState, useEffect } from 'react';
import './LearningStatus.css';

const LearningStatus = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [weeklyReports, setWeeklyReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  const getToken = () => localStorage.getItem('token');

  useEffect(() => {
    const token = getToken();
    fetch(`${process.env.REACT_APP_API_URL}/admin/student-management`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        if (data.length > 0) {
          setSelectedStudentId(data[0].id); // 첫 번째 학생 ID로 초기화
        }
      })
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  useEffect(() => {
    if (selectedStudentId) {
      const token = getToken();
      const url = `${process.env.REACT_APP_API_URL}/admin/learning-status?studentId=${selectedStudentId}`; // 쿼리 파라미터 사용

      fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched report data:', data);
          setWeeklyReports([data]);
          setSelectedReport(data);
          setSubjects(data); // subjects를 data로 직접 설정
        })
        .catch((error) => console.error('Error fetching report:', error));
    }
  }, [selectedStudentId]);

  return (
    <div className="learning-status">
      <h2>WEEKLY PT REPORT</h2>
      {selectedReport && <h3>{selectedReport.weekStartDate} ~ {selectedReport.weekEndDate}</h3>}

      {/* 학생 선택 */}
      <div>
        <h3>학생 선택</h3>
        <select onChange={(e) => setSelectedStudentId(e.target.value)} value={selectedStudentId || ''}>
          <option value="" disabled>학생 선택</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      {/* 리포트 내용 */}
      <div className="report-content">
        <div className="styled-table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>과목</th>
                <th>Plan (멘토생 기입)</th>
                <th>Do (학생 기입)</th>
                <th colSpan="2">Feedback (멘토생 기입)</th>
              </tr>
            </thead>
            <tbody>
              {subjects.length > 0 ? (
                subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.subjectName || '과목 이름 없음'}</td>
                    <td>{subject.planDetails || '계획 내용 없음'}</td>
                    <td contentEditable="true"></td>
                    <td colSpan="2" contentEditable="true">{subject.feedbackDetails || '피드백 내용 없음'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">과목 정보가 없습니다.</td>
                </tr>
              )}
              <tr>
                <td colSpan="5" contentEditable="true">
                  추가사항
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LearningStatus;
