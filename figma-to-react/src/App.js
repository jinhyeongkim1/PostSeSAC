import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import wrapperImage from './assets/background.png';

function App() {
  const [count, setCount] = useState(110);
  const navigate = useNavigate();
  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // 이전 상태를 기반으로 1 증가
    setTimeout(() => {
      navigate('/next'); // 방문자 수 증가 후 1초 뒤에 '/next' 페이지로 이동
    }, 1000); // 1초 뒤에 페이지 전환
  };

  return (
    <div className="container">
        <img src={wrapperImage} alt="image" />
        <button className="button" onClick={handleClick}>Click Me</button>
        <p className="counter-text">
          <span style={{ fontWeight: 'bold' }}>Total visitors<br /> '{count}'</span></p>
        </div>
  );
}

function NextPage() {
  return (
    <div className="container">
      <h1 className="page2-text">2024년 2월<br />만년 최하위후보였던<br />한화이글스는<br />류현진의 합류로<br />단숨에 5강을<br />기대할 수 있는팀으로<br />도약했다<br />
      하지만<br />한화이글스의<br />2024년<br />최종 성적<br />‘8위’<br />아쉬움<br />가득한<br />2024년<br />시즌성적표를<br />알아보자<br />
      .<br />.<br />.</h1>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}
