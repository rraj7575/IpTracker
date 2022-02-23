import React from 'react'
import PropTypes from 'prop-types'
import LocalStorage from './../../utils/localStorage'

function Navbar({auth, navigate, isAuthenticated}) {
    const onLogout = (e) => {
        e.preventDefault()
        LocalStorage.clear()
        navigate('/')
    }

    const authLink = (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <a onClick={onLogout} className='nav-link'>
                    Logout
                </a>
            </li>
        </ul>
    )
    const guestLink = (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'
                style={{color: 'white'}}
            >
                Welcome
            </li>
        </ul>
    )
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
            <div className="container">
                <div className='collapse navbar-collapse' id='mobile-nav'>
                    {isAuthenticated ? authLink : guestLink}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
};


export default Navbar