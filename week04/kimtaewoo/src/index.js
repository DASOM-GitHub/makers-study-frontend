import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Attendancebook from './chapter_10/Attendancebook';
import Signup from './chapter_11/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Attendancebook/> */}
    <Signup/>
  </React.StrictMode>
);

