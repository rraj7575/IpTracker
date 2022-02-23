import { useState, useEffect } from "react";
import Sawo from "sawo";
import "./LoginPage.css";
import {useNavigate} from 'react-router-dom'
import LocalStorage from './../../utils/localStorage'
const SAWO_API_KEY = process.env.REACT_APP_SAWO_API_KEY;

const SawoLogin = () => {
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [payload, setPayload] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        let config = {
            containerID: "sawo-container",
            identifierType: "phone_number_sms",
            apiKey: SAWO_API_KEY,
            onSuccess: (payload) => {
                LocalStorage.userDetails =  JSON.stringify(payload)
                // setUserLoggedIn(true);
                // setPayload(payload);
                navigate('/ip-tracker')
            },
        };
        let sawo = new Sawo(config);
        sawo.showForm();
    }, []);

    return (
        <div className="containerStyle">
            <section>
                {/*<h2 className="title">User Logged In : {isUserLoggedIn.toString()}</h2>*/}
                {!isUserLoggedIn ? (
                    <div className="formContainer" id="sawo-container" />
                ) : (
                    <div className="loggedin">
                        <h2>User Successful Login</h2>
                        <div>UserId: {payload.user_id}</div>
                        <div>Verification Token: {payload.verification_token}</div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default SawoLogin;