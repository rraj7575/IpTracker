import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IpTracker from "./components/iptracker/IpTracker";
import SawoLogin from "./components/login/SawoLogin";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SawoLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
