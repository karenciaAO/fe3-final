import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  // const {handleThemeChange, state} = useContextGlobal()
  return (
    <nav>
      
      <img src={logo} alt="logo-image" width={70} margin={10} />
      <div className='navbar-list'>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        {/* <button onClick={handleThemeChange}>{state.theme === 'dark' ? '☀️' : '🌙' }</button> */}
      </div>
    </nav>
  )
}

export default Navbar