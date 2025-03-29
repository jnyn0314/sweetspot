import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';

function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const token = localStorage.getItem('token');
      const url = `${process.env.REACT_APP_API_URL}/admin/teacher-management`; // API 경로
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
      setTeachers(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const handleViewTeacher = (id) => {
    console.log("Navigating to:", `/admin/teacher-details/${id}`);
    navigate(`/admin/teacher-details/${id}`);
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
            <th>College</th>
            <th>Sex</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.role}</td>
              <td>{teacher.loginId}</td>
              <td>{teacher.college}</td>
              <td>{teacher.sex}</td>
              <td>
                <button className="action-button" onClick={() => handleViewTeacher(teacher.id)}>
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

export default TeacherManagement;
