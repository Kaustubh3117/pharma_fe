import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

//import primereact and primeicons
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { rootStore } from './store/rootStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);

reportWebVitals();
