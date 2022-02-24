import React from 'react'
import './footer.css'

export default function Footer(){
  return(
    <footer className='bg-dark text-white mt-5 p-3 text-center fixed-footer'>
      Copyright &copy; {new Date().getFullYear()}
    </footer>
  )
}