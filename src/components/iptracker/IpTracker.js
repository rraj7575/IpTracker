import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {getGeoLocation} from "../../api/apiUrls";
import ShowGeoData from "./ShowGeoData";
import Spinner from "../common/Spinner";
import LocalStorage from './../../utils/localStorage'
import SearchSuggestion from "./SearchSuggestion";

const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY

const IpTracker = ({navigate, auth}) => {
    const [locationDetails, setLocation] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [ipAddress, setIpAddress] = useState('')
    const [history, setHistory] = useState([])
    const [historySuggestion, setHistorySuggestion] = useState([])

    useEffect(() => {
        let history = JSON.parse(LocalStorage.searchedHistory)
        history = history || []
        LocalStorage.searchedHistory = JSON.stringify(history)
        setHistory(history)
    }, [])

    useEffect(() => {
        showSuggestion()
    }, [ipAddress])

    const getLocation = (ip) => {
        if (!ipAddress && !ip){
            alert('Please enter ip address')
            return
        }
        setLoading(true)
        let api = `${getGeoLocation}?apiKey=${GEO_API_KEY}&ip=${ip || ipAddress}`
        axios.get(api)
            .then(response => {
                const {data} = response
                setLoading(false)
                setLocation([{...data}])
            })
            .catch(err => {
                setLoading(false)
                setLocation([])
                setError('Invalid ip address')
            })
        storeSearchedHistory()
    }

    const storeSearchedHistory = () => {
        let history = JSON.parse(LocalStorage.searchedHistory)
        history = history || []
        if (history.indexOf(ipAddress) === -1){
            history.push(ipAddress)
        }
        LocalStorage.searchedHistory = JSON.stringify(history)
        setHistory(history)
    }

    const showSuggestion = () => {
        let suggestion = []
        for (let i=0; i<history.length; i++ ){
            if (ipAddress && history[i].substr(0, ipAddress.length) === ipAddress){
                suggestion.push(history[i])
            }
        }
        setHistorySuggestion(suggestion)
    }

    const onChangeIpAddress = (e) => {
        const {value} = e.target
        setIpAddress(value)
    }

    return (
        <div>
            <h1>Ip Tracker</h1>
            {/*<input placeholder='Please enter ip address' value={ipAddress} onChange={onChangeIpAddress}/>*/}
            <SearchSuggestion onChangeIpAddress={onChangeIpAddress}  getLocation={getLocation} suggestions={historySuggestion}/>
            {loading ? <Spinner/> :
                <Fragment>
                    {error && <div> {error} </div>}
                    {locationDetails.length > 0 &&
                      <ShowGeoData locationDetails={locationDetails}/>
                    }
                </Fragment>
            }
            {/*{historySuggestion.map(ipAddress => {*/}
                {/*return <li key={ipAddress}>{ipAddress}</li>*/}
            {/*})}*/}
            <br/>
        </div>
    );
};


export default IpTracker
