import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import wrapperImage from './assets/background.jpg';



function App() {
  const [visitorCount, setVisitorCount] = useState(0); // 방문자 수 상태 관리
  const navigate = useNavigate();
  const goToNextPage = () => {
    setVisitorCount(prevCount => prevCount + 1); // 버튼 클릭 시 방문자 수 증가
    navigate('/next', { state: { visitorCount: visitorCount + 1 } }); // 방문자수카운트 증가하고 이동
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Dear eagles</h1>
        <h1 className="vcount">Total Visitors: {visitorCount}</h1> 
      </header>
        <h1 className="page1-text">2024년 2월 만년 최하위후보였던<br />한화이글스는 류현진의 합류로<br />단숨에 5강을 기대할 수 있는팀으로 도약했다<br />
        하지만 한화이글스의 2024년 최종 성적<br /><br />‘8위’<br /><br />아쉬움 가득한 2024년 시즌성적표를 알아보자
        </h1>
        <img src={wrapperImage} alt="image" />
        <button className="button" onClick={goToNextPage}>↓</button>
        </div>
  );
}

function NextPage() {
  const location = useLocation();  // 이전 페이지에서 전달된 상태를 가져오기
  const visitorCount = location.state ? location.state.visitorCount : 0; // 방문자 수가 전달되지 않았다면 0으로 설정

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Dear eagles</h1>
        <h1 className="vcount">Total Visitors: {visitorCount}</h1> {/* 방문자 수 */}
      </header>
      <h1 className="page2-text">2024시즌 한화이글스가<br />가장 많이 승리를<br />기록한 달은<br />언제일까?<br />
      </h1>
      <div className="button-container">
        <button className="button-image"><img src="/images/image1.png" alt="Button 1" /></button>
        <button className="button-image"><img src="/images/image2.png" alt="Button 2" /></button>
        <button className="button-image"><img src="/images/image3.png" alt="Button 3" /></button>
        <button className="button-image"><img src="/images/image4.png" alt="Button 4" /></button>
        <button className="button-image"><img src="/images/image5.png" alt="Button 5" /></button>
        <button className="button-image"><img src="/images/image6.png" alt="Button 6" /></button>
        <button className="button-image"><img src="/images/image7.png" alt="Button 7" /></button>
        <button className="button-image"><img src="/images/image8.png" alt="Button 8" /></button>
      </div>
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


