import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// translations
import { I18nextProvider } from 'react-i18next';
import i18next from './services/i18next_translation';
import { AuthProvider } from './contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>
);
