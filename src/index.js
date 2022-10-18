import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PopupNome from './componentes/PopupNome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopupNome></PopupNome>
    <App />
  </React.StrictMode>
);
