import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blocks from './styled-components/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);
