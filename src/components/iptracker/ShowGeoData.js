import {Fragment, memo} from 'react'
import React from "react";

function ShowGeoData({locationDetails}) {
    return (
        <div className='row'
             style={{textAlign: 'left'}}
        >
            <div className='col-12'>
                {locationDetails.map(details => {
                    const {ip} = details
                    return <h3 key={ip} style={{marginBottom: '20px'}}>Information About IP Address: {ip}</h3>
                })}
            </div>
            <div className='col-6'>
                <p>Country Name</p>
                <p>Country Code</p>
                <p>City</p>
                <p>Latitude</p>
                <p>Longitude</p>
                <p>Flag</p>
                <br/>
                {locationDetails.map(details => {
                    const {ip, latitude,} = details
                    return <a href={`https://www.google.com/maps/search/?api=1&query=${latitude},${latitude}`}
                              target={'_blank'}
                              key={ip}
                    >Visit In Map</a>
                })}
            </div>
            <div className='col-6'>
                {locationDetails.map(details => {
                    const {
                        ip, city, country_flag, country_name,
                        country_code2, latitude, longitude,
                    } = details
                    return <Fragment key={ip}>
                        <p>{country_name}</p>
                        <p>{country_code2}</p>
                        <p>{city}</p>
                        <p>{latitude}</p>
                        <p>{longitude}</p>
                        <p><img src={country_flag} alt={'flag'}/></p>
                    </Fragment>

                })}
            </div>
        </div>
    )
}


export default memo(ShowGeoData)