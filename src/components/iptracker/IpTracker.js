import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {getGeoLocation} from "../../api/apiUrls";
import ShowGeoData from "./ShowGeoData";
import Spinner from "../common/Spinner";

const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY

const IpTracker = () => {
    const [locationDetails, setLocation] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [ipAddress, setIpAddress] = useState('8.8.8.8')

    // useEffect(() => {
    //     getLocation()
    // }, [])

    const getLocation = () => {
        setLoading(true)
        let api = `${getGeoLocation}?apiKey=${GEO_API_KEY}&ip=${ipAddress}`
        axios.get(api)
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

    const onChangeIpAddress = (e) => {
        const {value} = e.target
        setIpAddress(value)
        getLocation()
    }

    return (
        <div>
            <h1>Ip Tracker</h1>
            <input value={ipAddress} onChange={onChangeIpAddress}/>
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
