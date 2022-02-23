import React, {Fragment, Component} from 'react';
import axios from "axios";
import {getGeoLocation} from "../../api/apiUrls";
import ShowGeoData from "./ShowGeoData";
import Spinner from "../common/Spinner";
import LocalStorage from './../../utils/localStorage'
import SearchSuggestion from "./SearchSuggestion";

const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY

class IpTracker2 extends Component {
    constructor(props) {
        super(props)
        let searchedHistory = JSON.parse(LocalStorage.searchedHistory)
        searchedHistory = searchedHistory || []
        this.state = {
            locationDetails: [],
            error: '',
            loading: false,
            ipAddress: '',
            searchedHistory,
            historySuggestion: [],
        }
    }

    getLocation = (ip) => {
        const {ipAddress} = this.state
        if (!ipAddress && !ip) {
            alert('Please enter ip address')
            return
        }
        this.setState({loading: true})
        let api = `${getGeoLocation}?apiKey=${GEO_API_KEY}&ip=${ip || ipAddress}`
        axios.get(api)
            .then(response => {
                const {data} = response
                let updatedState = {
                    loading: false,
                    locationDetails: [{...data}],
                    error: '',
                    historySuggestion: []
                }
                if (ip){
                    updatedState['ipAddress'] = ip
                }
                this.setState({...updatedState})
            })
            .catch(err => {
                this.setState({loading: false, locationDetails: [], historySuggestion: [], error: 'Invalid ip address'})
            })
        this.storeSearchedHistory()
    }

    storeSearchedHistory = () => {
        const {ipAddress} = this.state
        let searchedHistory = JSON.parse(LocalStorage.searchedHistory)
        searchedHistory = searchedHistory || []
        if (searchedHistory.indexOf(ipAddress) === -1) {
            searchedHistory.push(ipAddress)
        }
        LocalStorage.searchedHistory = JSON.stringify(searchedHistory)
        this.setState({searchedHistory})
    }

    showSuggestion = () => {
        let suggestion = []
        const {searchedHistory, ipAddress} = this.state
        for (let i = 0; i < searchedHistory.length; i++) {
            if (ipAddress && searchedHistory[i].substr(0, ipAddress.length) === ipAddress) {
                suggestion.push(searchedHistory[i])
            }
        }
        this.setState({historySuggestion: suggestion})
    }

    onChangeIpAddress = (e) => {
        const {value} = e.target
        this.setState({ipAddress: value}, () => {
            this.showSuggestion()
        })
    }

    render() {
        const {loading, locationDetails, historySuggestion, error, ipAddress} = this.state
        return (
            <div>
                <h1>Ip Tracker</h1>
                <SearchSuggestion onChangeIpAddress={this.onChangeIpAddress}
                                  getLocation={this.getLocation}
                                  suggestions={historySuggestion}
                                  inputVal={ipAddress}
                />
                {loading ? <Spinner/> :
                    <Fragment>
                        {error && <div> {error} </div>}
                        {locationDetails.length > 0 &&
                            <Fragment>
                                <br/>
                                <h1>Information About IP Address: {ipAddress}</h1>
                                <br/>
                                <ShowGeoData locationDetails={locationDetails}/>
                            </Fragment>
                        }
                    </Fragment>
                }
                <br/>
            </div>
        );
    }
}


export default IpTracker2
