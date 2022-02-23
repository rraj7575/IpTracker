import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router'
import SawoLogin from "./components/login/SawoLogin";
import LocalStorage from './utils/localStorage'
import IpTracker from "./components/iptracker/IpTracker";
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/common/PrivateRoute";


function App({}) {

    useEffect(() => {
        if (LocalStorage.userDetails) {
            // navigate('/ip-tracker')
        }
    }, [])
    let auth = LocalStorage.userDetails ? JSON.parse(LocalStorage.userDetails) : {}
    return (
        <div className="App">
            <Navbar auth={auth}/>
            <Router>
                <Routes>
                    <Route exact path="/ip-tracker" element={<IpTracker auth={auth} />} />
                    <Route path="/" element={<SawoLogin auth={auth} />}/>
                </Routes>
                {/*<PrivateRoute path='/ip-tracker' component={IpTracker} auth={auth} />*/}
            </Router>
        </div>
    );
}

export default App
