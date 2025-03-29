import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

const fetchStudents = async () => {
  try {
    const token = localStorage.getItem('token');
    // const url = 'http://localhost:8080/admin/student-management';
    const url = `${process.env.REACT_APP_API_URL}/admin/student-management`;
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

console.log('Token:', token);

    console.log('Request URL ', url);
    console.log('Request Headers ', headers);
    const response = await fetch(url, {
    method : 'GET',
    headers,
    credentials:'include'
    });
console.log('response 문제 ', response);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setStudents(data);
  } catch (error) {
    console.error('Error fetching students:', error);
  }
};

  const handleViewStudent = (id) => {
    navigate(`/admin/learning-status/${id}`);
  };

  return (
    <div className="user-management">
      <h2>Student Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>
                <button className="action-button" onClick={() => handleViewStudent(student.id)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentManagement;
