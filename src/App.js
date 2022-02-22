import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IpTracker from "./components/iptracker/IpTracker";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IpTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
