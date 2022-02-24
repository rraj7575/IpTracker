import {Fragment} from 'react'
import React from "react";

function ShowGeoData({locationDetails}) {
    return (
        <div>
            {locationDetails.map(details => {
                const {ip} = details
                return <h3 key={ip}>Information About IP Address: {ip}</h3>
            })}
            <div className='Row'>
               <div className='col-5'>
                    <p>Country Name</p>
                   <p>Country Code</p>
                   <p>City</p>
                   <p>Flag</p>
                   <p>Latitude</p>
                   <p>Longitude</p>
               </div>
                <div className='col-7'>
                    {locationDetails.map(details => {
                        const {
                            ip, city, country_flag, country_name,
                            country_code2, latitude, longitude,
                        } = details
                        return <Fragment key={ip}>
                            <p>{country_name}</p>
                            <p>{country_code2}</p>
                            <p>{city}</p>
                            <img src={country_flag} alt={'flag'}/>
                            <p>{latitude}</p>
                            <p>{longitude}</p>
                        </Fragment>

                    })}
                </div>
            </div>

            {/*<table align='center' border='1'>*/}
                {/*<thead>*/}
                {/*<tr>*/}
                    {/*<th>Country Name</th>*/}
                    {/*<th>Country Code</th>*/}
                    {/*<th>City</th>*/}
                    {/*<th>Flag</th>*/}
                    {/*<th>Latitude</th>*/}
                    {/*<th>Longitude</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                    {/*{locationDetails.map(details => {*/}
                    {/*const {*/}
                        {/*ip, city, country_flag, country_name,*/}
                        {/*country_code2, latitude, longitude,*/}
                    {/*} = details*/}
                    {/*return <Fragment key={ip}>*/}
                        {/*<th>{country_name}</th>*/}
                        {/*<th>{country_code2}</th>*/}
                        {/*<th>{city}</th>*/}
                        {/*<img src={country_flag} alt={'flag'}/>*/}
                        {/*<th>{latitude}</th>*/}
                        {/*<th>{longitude}</th>*/}
                    {/*</Fragment>*/}

                {/*})}*/}
                {/*</tr>*/}
                {/*</tbody>*/}
            {/*</table>*/}
            <br/>
            {locationDetails.map(details => {
                const {ip, latitude,} = details
                return <a href={`https://www.google.com/maps/search/?api=1&query=${latitude},${latitude}`}
                          target={'_blank'}
                          key={ip}
                >Visit In Map</a>
            })}
        </div>
    )
}


export default ShowGeoData