import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router, // before deploying use just router
} from 'react-router-dom';
import './styles/reset.scss';
import App from './App';
import { ScrollProvider } from './helpers/scrollProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </Router>
  </React.StrictMode>
);

