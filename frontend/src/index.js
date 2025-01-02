import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import TailwindCSS styles
import App from './App'; // Main App component

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
