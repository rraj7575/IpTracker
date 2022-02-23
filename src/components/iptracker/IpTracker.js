import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {getGeoLocation} from "../../api/apiUrls";
import ShowGeoData from "./ShowGeoData";
import Spinner from "../common/Spinner";

const IpTracker = () => {
    const [locationDetails, setLocation] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // getLocation()
    }, []);

    const getLocation = () => {
        setLoading(true)
        axios.get(getGeoLocation)
            .then(response => {
                const {data} = response
                setLoading(false)
                setLocation([{...data}])
            })
            .catch(err => {
                setLoading(false)
                setError('Oops, something went wrong')
            })
    }

    return (
        <div>
            <h1>Ip Tracker</h1>
            {loading ? <Spinner/> :
                <Fragment>
                    {error ? <div>
                            {error}
                        </div>
                        :
                        <ShowGeoData locationDetails={locationDetails}/>
                    }
                </Fragment>
            }
            <br/>
        </div>
    );
};


export default IpTracker
