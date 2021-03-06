import React, {useEffect, lazy, Suspense} from "react";
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SawoLogin from "./components/login/SawoLogin";
import LocalStorage from './utils/localStorage'
import Navbar from "./components/layout/Navbar";
import {root, ipTracker} from "./path/commonPath";
import Footer from "./components/layout/Footer";
// import IpTracker from "./components/iptracker/IpTracker";
import ProtectedRoutes from "./components/common/ProtectedRoutes";

const AsyncIpTracker = lazy(() => import("./components/iptracker/IpTracker"));

function Root() {
    const navigate = useNavigate();
    let auth = LocalStorage.userDetails ? JSON.parse(LocalStorage.userDetails) : {}
    let isAuthenticated = !!auth.user_id
    useEffect(() => {
        if (isAuthenticated) {
            navigate(ipTracker)
        }
    }, [isAuthenticated])
    return (
        <div className="App">
            <Navbar navigate={navigate} isAuthenticated={isAuthenticated}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={root}
                           element={<SawoLogin auth={auth} navigate={navigate} isAuthenticated={isAuthenticated}/>}/>
                    <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated}/>}>
                        <Route exact path={ipTracker} element={<AsyncIpTracker/>}/>
                    </Route>
                </Routes>
            </Suspense>
            <Footer/>
        </div>
    );
}


export default Root
