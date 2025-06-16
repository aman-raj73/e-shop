import React from 'react'
import logo from './asset/logo.png'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:'#EAEFEF'}}>
  <div className="container">
    <Link className="navbar-brand" to="#"><img src={logo} alt="" height="60px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
          <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/men">Mens</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/women">Womens</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/kids">kids</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="#" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
      </ul>
      <form className="d-flex gap-4">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <FaCartShopping className='fs-2 text-danger'/>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
