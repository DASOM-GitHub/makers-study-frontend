import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Library from './jsx/Library'
import Clock from './clock/Clock';
import CommentList from './comment/commentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

