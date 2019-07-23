import React from 'react';

import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className="bgcolor sticky " id="Navbar">
            
        <div className="container">
        <div className="row align-items-center justify-content-center d-flex">
            <nav className="navbar navbar-expand-lg navbar-dark  ">
            
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item active">
                            <Link className="nav-link1"  to='/'>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        
                            
                            
                        
                        <li className="nav-item">
                            <Link className="nav-link1"  href="#Employer" to='/employer'>Employer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1"  href="#Jobs" to='/jobs'>Job search</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link1"  href="#Know" to='/about'>Know us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1"  href="#Trends" to='/trends'>Trends</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link1"  href="#Contact" to='/contact'>Talk to us</Link>
                        </li>
                        <li className="nav-item">
                        <button className="button" ><span><Link className="nav-link2"  href="#Vacancy" to='/vacancy'>Recruit ?</Link> </span></button>
                        
                        </li>
                        <div className='b2'>
                        <li className="nav-item">
                        <button className="button1" ><span><Link className="nav-link3"  href="#Login" to='/login'>LOG IN </Link> </span></button>
                        
                        </li>
                        
                        </div>
                        
                        
                        
                        
                        </ul>
                        
                    </div>
                    </nav>
            </div>
            </div>
            </div>

        );
};

export default Navbar;
