import React from 'react'
import PropTypes from 'prop-types'
import LocalStorage from './../../utils/localStorage'
import {useNavigate} from "react-router";

function Navbar({auth, navigate}) {
    let isAuthenticated = !!auth.user_id

   const onLogout = (e) => {
     e.preventDefault()
      LocalStorage.clear()
       navigate('/')
  }

  const authLink = (
      <ul className='navbar-nav ml-auto'>
        <li className= 'nav-item'>
          <button onClick={onLogout} className='nav-link' >
            Logout
          </button>
        </li>
      </ul>
    )
    const guestLink = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            Welcome
        </li>
      </ul>
    )
    return(
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
        <div className="container">
          <div className='collapse navbar-collapse' id='mobile-nav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                  Site Header
              </li>
            </ul>
            {isAuthenticated ? authLink: guestLink}
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
};


export default Navbar