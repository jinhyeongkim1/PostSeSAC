import './App.css';
import Counter from './Counter';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

    useEffect(() => {
        // Django API 호출
        fetch('http://127.0.0.1:8000/api/hello/')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.log('Error:', error));
    }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
      <Counter />
    </div>
  );
}

export default App;
