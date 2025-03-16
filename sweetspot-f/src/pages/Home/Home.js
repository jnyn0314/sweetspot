import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'; // Home.css 파일에서 애니메이션 스타일 정의
import TopNavBar from '../../components/TopNavBar'; // TopNavBar 컴포넌트 import
import ScrollDown from './ScrollDown'; // ScrollDown 컴포넌트 import
import './ScrollDown.css';

function Home() {
  const [message, setMessage] = useState(''); // API 메시지 상태
  const [isVisible, setIsVisible] = useState(false); // sweetspot 애니메이션 상태

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // API 호출로 메시지 가져오기
    axios
      .get('/api/message')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching message:', error);
      });

    // sweetspot 애니메이션 트리거 (컴포넌트 마운트 후 실행)
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <TopNavBar />
      <div style={{ height: '200vh' }}>
        {/* sweetspot 텍스트 */}
        <h1 className={`sweetspot ${isVisible ? 'visible' : ''}`}>sweetspot</h1>
        {/* API 메시지 */}
        <p data-aos="fade-up">{message}</p>
      </div>
      <ScrollDown />
    </div>
  );
}

export default Home;
