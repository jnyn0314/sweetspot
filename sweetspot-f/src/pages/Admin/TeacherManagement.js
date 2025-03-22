// TeacherManagement.js
import React, { useEffect, useState } from 'react';
import './UserManagement.css';

function TeacherManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    const data = [
      { id: 1, name: '김선생', role: 'teacher', teacherId: 'T123', password: 'password123' },
      { id: 2, name: '박선생', role: 'teacher', teacherId: 'T456', password: 'password456' },
    ];
    setUsers(data);
  };

  return (
    <div className="user-management">
      <h2>Teacher Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>ID</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.teacherId}</td>
              <td>{user.password}</td>
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

export default TeacherManagement;
