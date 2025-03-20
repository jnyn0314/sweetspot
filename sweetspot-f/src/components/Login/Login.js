import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [loginId, setLoginId] = useState('');
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
          loginId: loginId,
          password: password,
          role: role,
        }
      );

     if (response.data.success) {
          // 토큰 저장
          localStorage.setItem('token', response.data.token);

          // 역할에 따른 리다이렉트
          if(response.data.role === 'ADMIN'){
            navigate('/admin');
          } else if(response.data.role === 'TEACHER'){
            navigate('/dashboard');
          }
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
          name="loginId"
          placeholder="Id"
          value={loginId}
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
          <option value="TEACHER">강사</option>
          <option value="ADMIN">관리자</option>
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
