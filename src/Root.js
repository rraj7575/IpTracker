import React, {useEffect} from "react";
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SawoLogin from "./components/login/SawoLogin";
import LocalStorage from './utils/localStorage'
import Navbar from "./components/layout/Navbar";
import {root, ipTracker} from "./path/commonPath";
import Footer from "./components/layout/Footer";
import IpTracker from "./components/iptracker/IpTracker";


function Root({}) {
    const navigate = useNavigate();
    let auth = LocalStorage.userDetails ? JSON.parse(LocalStorage.userDetails) : {}
    let isAuthenticated = !!auth.user_id
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/ip-tracker')
        }
    }, [])
    return (
        <div className="App">
            <Navbar auth={auth} navigate={navigate} isAuthenticated={isAuthenticated}/>
            <Routes>
                <Route path={root} element={<SawoLogin auth={auth} navigate={navigate} isAuthenticated={isAuthenticated}/>}/>
                <Route exact path={ipTracker} element={<IpTracker auth={auth} isAuthenticated={isAuthenticated}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Root
