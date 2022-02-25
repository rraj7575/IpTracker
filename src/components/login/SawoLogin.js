import {useEffect} from "react";
import Sawo from "sawo";
import "./LoginPage.css";
import LocalStorage from './../../utils/localStorage'
import {ipTracker} from "../../path/commonPath";
import PropTypes from "prop-types";

const SAWO_API_KEY = process.env.REACT_APP_SAWO_API_KEY;

const SawoLogin = ({navigate, isAuthenticated}) => {
    // const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    // const [payload, setPayload] = useState({});
    if (isAuthenticated) {
        navigate(ipTracker)
    }

    useEffect(() => {
        let config = {
            containerID: "sawo-container",
            identifierType: "phone_number_sms",
            apiKey: SAWO_API_KEY,
            onSuccess: (payload) => {
                LocalStorage.userDetails = JSON.stringify(payload)
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
                <div className="formContainer" id="sawo-container"/>
            </section>
        </div>
    );
};

SawoLogin.propTypes = {
    navigate: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default SawoLogin;
