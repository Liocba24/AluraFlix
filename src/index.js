import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import AppRoutes from '../src/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);