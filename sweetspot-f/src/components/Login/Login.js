import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [login_id, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${apiUrl}/api/login`,
        {
          loginId: login_id,
          password: password,
          role: role,
        }
      );

      if (response.status === 200) {
        // 로그인 성공 시 Student 페이지로 리다이렉트
        navigate('/student');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert('잘못된 계정 정보입니다');
      } else {
        alert('로그인 처리 중 오류 발생');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login_id"
          placeholder="Id"
          value={login_id}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select name="role" value={role} onChange={handleRoleChange} required>
          <option value="" disabled>Select Role</option>
          <option value="student">학생</option>
          <option value="teacher">강사</option>
          <option value="admin">관리자</option>
        </select>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="remember-check"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="remember-check">아이디 저장하기</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
