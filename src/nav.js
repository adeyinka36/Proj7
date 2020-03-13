import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav =()=>{
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/pics2019'>2019</NavLink></li>
          <li><NavLink to='/Wildlife'>Wildlife</NavLink></li>
          <li><NavLink to='/cars'>Cars</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav