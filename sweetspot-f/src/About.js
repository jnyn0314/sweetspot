import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopNavBar from './components/TopNavBar';

function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }, []);

  return (
    <div>
      <TopNavBar />
      <p>{message}</p>
    </div>
  );
}

export default About;
