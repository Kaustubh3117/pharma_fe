import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import primereact and primeicons
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
