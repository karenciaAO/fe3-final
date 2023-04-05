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
          <a href='https://www.facebook.com/'><img src={facebook} alt="facebook" /></a>
          <a href='https://www.reddit.com'><img src={reddit} alt="reddit" /></a>
          <a href='https://www.instagram.com'><img src={instagram} alt="instagram" /></a>
          <a href='https://twitter.com/home?lang=es'><img src={twitter} alt="twitter" /></a>
        </div>
      </div>
    
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
