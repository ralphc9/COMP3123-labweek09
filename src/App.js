import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [info] = useState({
    course: "Fullstack Development - I",
    labTitle: "React JS Programming Week09 Lab exercise",
    studentID: "101407136",
    name: "Ralph Canlas",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        className="logo"
      />
      <h1>Welcome to {info.course}</h1>
      <p>{info.labTitle}</p>
      <p>{info.studentID}</p>
      <p>{info.name}</p>
      <p>{info.college}</p>
    </div>
  );
}

export default App;
