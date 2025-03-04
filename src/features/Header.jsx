import  '../Styling/Header.css'
import React from 'react';
import { Link  } from 'react-router-dom';
export default function Header() {
 
  return (
    <header className=' sticky-top' >
     <section className="bg-dark rounded-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          < Link to='/' className="navbar-brand ">
            <span>
             <span className='nav-logo1'><b >Ampex</b></span> 
             <span className='nav-logo2'><b >Web</b></span>
            </span>
            </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent" 
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/'  className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" >Courses</Link>
              </li>
              <li className="nav-item">
                <Link to='/About' className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/Contact' className="nav-link">Contact</Link>
              </li>
              
            </ul>
            
            <div className="d-flex align-items-center">
                <div className=" nav-register" >
                   <Link to="#" > <button type="submit" >Register</button></Link>
                </div>
            </div>
          </div>
        </nav>
      </div>
    </section>

    </header>
    
  );
}
