import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configStore } from './configStore/configStore';

/* custom components */
import './shared/styles/index.css';
import App from './App';

/* import primereact and primeicons */
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeToast } from './shared/common/PrimeToast/PrimeToast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configStore}>
    <PrimeToast />
    <App />
  </Provider>
);

reportWebVitals();
