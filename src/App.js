import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router'
import SawoLogin from "./components/login/SawoLogin";
import LocalStorage from './utils/localStorage'
import IpTracker from "./components/iptracker/IpTracker";


function App({}) {
    // let navigate = useNavigate()

    useEffect(() => {
        if (LocalStorage.userDetails) {
            // navigate('/ip-tracker')
        }
    }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SawoLogin />} />
          <Route path="/ip-tracker" element={<IpTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
