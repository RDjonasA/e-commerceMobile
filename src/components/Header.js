import React from 'react'
import { NavLink} from 'react-router-dom'
import '../assets/css/header.css'
export default function Header() {
  return (
<div className='section-header'>
    <div className="row row-cols-3 center">
    <div className="col"><h2>Shop</h2></div>
    <div className="col">
      <NavLink end to='/' className='color'>
        <img src='http://escueladevrock.com/store/0.png' className='log-header'/>
      </NavLink>
    </div>
    <div className="col">
    </div>
  </div>
  </div>
  )
}
