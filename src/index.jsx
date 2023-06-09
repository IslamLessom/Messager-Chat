import React from 'react';
import ReactDOM from 'react-dom/client';
//context
import { AuthContextProvider } from "./context/AuthContext"
import { ChatContextProvider } from './context/UserContext';
//components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
