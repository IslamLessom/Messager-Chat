import React from 'react';
import ReactDOM from 'react-dom/client';
//context
import { AuthContextProvider } from "./context/AuthContext"
//components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
