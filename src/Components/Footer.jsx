import React from 'react'
import DH from '../assets/DH.png'
import facebook from '../assets/facebook.png'
import reddit from '../assets/reddit.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer>
    <div className='red-container'>
        <p>Proyecto Academico KVAO</p>
      </div>

      <div className="social">
        <div className='DH'>
          <img className='dh-logo' src={DH} alt='DH-logo' />
        </div>
        <div className='rrss'>
          <img src={facebook} alt="facebook" />
          <img src={reddit} alt="reddit" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
