import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserManagement.css';

function TeacherDetails() {
  const [teacher, setTeacher] = useState(null);
  const [students, setStudents] = useState([]);
  const { id } = useParams(); // URL 파라미터에서 강사 ID를 추출

  useEffect(() => {
    fetchTeacherDetails(id);
    fetchStudentsByTeacher(id);
  }, [id]);

  // 강사 정보 가져오기
  const fetchTeacherDetails = async (teacherId) => {
    try {
      const token = localStorage.getItem('token');
      const url = `${process.env.REACT_APP_API_URL}/admin/teacher-management/${teacherId}`;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      const response = await fetch(url, {
        method: 'GET',
        headers,
        credentials: 'include'
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTeacher(data);
    } catch (error) {
      console.error('Error fetching teacher details:', error);
    }
  };

  // 강사의 학생 목록 가져오기
  const fetchStudentsByTeacher = async (teacherId) => {
    try {
      const token = localStorage.getItem('token');
      const url = `${process.env.REACT_APP_API_URL}/admin/teacher-management/${teacherId}/students`;  // 강사 관리 학생 목록 API
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      const response = await fetch(url, {
        method: 'GET',
        headers,
        credentials: 'include'
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Students data:", data);  // 데이터 출력 확인
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  if (!teacher) {
    return <div>Loading teacher details...</div>;
  }

  return (
    <div className="teacher-details">
      <h2>Teacher Details</h2>
      <div className="teacher-info">
        <h3>{teacher.name}</h3>
        <p><strong>ID:</strong> {teacher.loginId}</p>
        <p><strong>College:</strong> {teacher.college}</p>
        <p><strong>Sex:</strong> {teacher.sex}</p>
      </div>

      <h3>Students Managed by This Teacher</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDetails;
