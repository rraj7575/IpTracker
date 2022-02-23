import {Fragment} from 'react'

function ShowGeoData({locationDetails}) {
    return (
        <div>
            <table align='center' border='1'>
                <thead>
                <tr>
                    <th>Country Name</th>
                    <th>Country Code</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
                </thead>
                <tbody>
                <tr>{locationDetails.map(details => {
                    const {
                        ip, city, region, region_code, country_name,
                        country_code, country_capital, latitude, longitude,
                        country_calling_code
                    } = details
                    return <Fragment key={ip}>
                        <th>{country_name}</th>
                        <th>{country_code}</th>
                        <th>{region}</th>
                        <th>{city}</th>
                        <th>{latitude}</th>
                        <th>{longitude}</th>
                    </Fragment>

                })}</tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowGeoData