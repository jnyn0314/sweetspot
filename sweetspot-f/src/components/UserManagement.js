// UserManagement.js
import React, { useState, useEffect } from 'react';
import './UserManagement.css';
import AddUserForm from '../pages/Admin/AddUserForm'; // AddUserForm import
import { Link } from 'react-router-dom';

function UserManagement() {
  const [selectedRole, setSelectedRole] = useState('student'); // 초기값 'student'로 설정
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    // 초기 데이터 로딩 또는 role 변경 시 데이터 필터링
    fetchUsers(selectedRole);
  }, [selectedRole]);

  const fetchUsers = async (role) => {
    // API 호출 또는 데이터 필터링 로직
    // 예시 데이터 (API 호출로 대체)
    let data = [];
    if (role === 'teacher') {
      data = [
        { id: 1, name: '김선생', role: 'teacher', teacherId: 'T123', password: 'password123' },
        { id: 2, name: '박선생', role: 'teacher', teacherId: 'T456', password: 'password456' },
      ];
    } else {
      data = [
        { id: 3, name: '김학생', role: 'student', grade: 3, 담당Teacher: '김선생', subjects: ['국어', '영어'] },
        { id: 4, name: '이학생', role: 'student', grade: 2, 담당Teacher: '박선생', subjects: ['수학', '과학'] },
      ];
    }
    setUsers(data);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleAddUserClick = () => {
      setShowAddUserForm(true); // 폼 표시
    };

    const handleCancelAddUser = () => {
      setShowAddUserForm(false); // 폼 닫기
    };

    const handleAddUser = (newUser) => {
        // 새 사용자 추가 로직 (API 호출 또는 state 업데이트)
        console.log('New User:', newUser); // 콘솔에 출력 (실제로는 API 호출)
        setUsers([...users, newUser]); // state 업데이트 (새 사용자 추가)
        setShowAddUserForm(false); // 폼 닫기
      };


  const getTableHeaders = () => {
    if (selectedRole === 'teacher') {
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>ID</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
      );
    } else {
      return (
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
      );
    }
  };

  const renderTableRows = () => {
    return users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.role}</td>
        {selectedRole === 'teacher' ? (
          <>
            <td>{user.teacherId}</td>
            <td>{user.password}</td>
          </>
        ) : (
          <>
            <td>{user.grade}</td>
            <td>{user.담당Teacher}</td>
            <td>{user.subjects.join(', ')}</td>
          </>
        )}
        <td>
          <button className="action-button">Edit</button>
          <button className="action-button delete">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="user-management">
      <div className="content-wrapper">
        <div className="filter-section">
          <div className="filter-options">
            <select className="role-select" value={selectedRole} onChange={handleRoleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <div className="search-input">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search users..." />
            </div>
          </div>
          <Link to="/admin/add-user" className="add-user-button">
                      Add New User
                    </Link>
        </div>

        <div className="table-container">
          <table className="user-table">
            {getTableHeaders()}
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>

        <div className="pagination">
          <span className="pagination-summary">Showing 1 to 2 of 2 results</span>
          <div className="pagination-controls">
            <button disabled>Previous</button>
            <button>Next</button>
          </div>
        </div>
        {/* AddUserForm 표시 */}
                {showAddUserForm && (
                  <AddUserForm onCancel={handleCancelAddUser} onAddUser={handleAddUser} />
                )}
      </div>
    </div>
  );
}

export default UserManagement;
