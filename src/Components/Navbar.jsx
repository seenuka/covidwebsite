import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar(){
  return (
      
      <div classname='navbar'>
          <h3 className='logo'>COVid-19</h3>
              <ul className='nav-links'>
          <Link to='/' className='home'><li>Home</li></Link>
          <Link to='/about' className='about'><li>About</li></Link>
          <Link to='/signup' className='signup'><li>Signup</li></Link>
          <Link to='/stats' className='stats'><li>Stats</li></Link>
          <Link to='/vaccine' className='vaccine'><li>Vaccine</li></Link>
              </ul>
            

          

    </div>
  )
}

export default Navbar