// AddUserForm.js
import React, { useState } from 'react';
import './AddUserForm.css'; // CSS 파일 import
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function AddUserForm({ onCancel, onAddUser }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('teacher'); // 초기 역할: teacher
  const [formData, setFormData] = useState({});

const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('내용을 입력하시겠습니까?')) {
      // 새 사용자 추가 로직 (API 호출 또는 state 업데이트)
      navigate.push('/admin'); // `/admin` 경로로 이동
    }
  };
const handleCancel = () => {
    navigate.push('/admin'); // `/admin` 경로로 이동
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-user-form-overlay">
      <div className="add-user-form">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          {role === 'teacher' ? (
            <>
              <div className="form-group">
                <label htmlFor="loginId">Login ID:</label>
                <input type="text" id="loginId" name="loginId" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" onChange={handleChange} />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input type="number" id="grade" name="grade" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="subjects">Subjects:</label>
                <input type="text" id="subjects" name="subjects" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" onChange={handleChange} />
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="submit">Add User</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
