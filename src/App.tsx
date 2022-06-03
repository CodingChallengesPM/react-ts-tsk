import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logo from './components/Logo';
import HomePage from './components/HomePage';
import CompanyPage from './components/CompanyPage';

function App() {
  return (
    <>
      <Logo/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:comanyName" element={<CompanyPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
