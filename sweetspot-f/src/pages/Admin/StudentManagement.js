// StudentManagement.js
import React, { useEffect, useState } from 'react';
import './UserManagement.css';

function StudentManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    const data = [
      { id: 3, name: '김학생', role: 'student', grade: 3, 담당Teacher: '김선생', subjects: ['국어', '영어'] },
      { id: 4, name: '이학생', role: 'student', grade: 2, 담당Teacher: '박선생', subjects: ['수학', '과학'] },
    ];
    setUsers(data);
  };

  return (
    <div className="user-management">
      <h2>Student Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Grade</th>
            <th>담당 Teacher</th>
            <th>Subjects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.grade}</td>
              <td>{user.담당Teacher}</td>
              <td>{user.subjects.join(', ')}</td>
              <td>
                <button className="action-button">Edit</button>
                <button className="action-button delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentManagement;
