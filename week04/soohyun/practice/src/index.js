import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './signup/Signup';
import Calculator from './temperature/Calculator';
import ProfileCard from './card/ProfileCard';
import DarkOrLight from './context/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);

