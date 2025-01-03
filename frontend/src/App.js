import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel'; // Ensure this component exists

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
