import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PopupNome from './componentes/PopupNome';
import PopupAviso from './componentes/PopupAviso/PopupAviso';
import { StoreProvider } from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <PopupAviso></PopupAviso>
      <PopupNome></PopupNome>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
