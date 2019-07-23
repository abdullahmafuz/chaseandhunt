import React from 'react';
import header_img from '../Components/asset/img/chase&hunt_logo.png';
import fb from '../Components/asset/img/facebook_icon.png';
import ink from '../Components/asset/img/in.png';
import twitter from '../Components/asset/img/twitter.png'
import insta from '../Components/asset/img/insta.png'
import {Link} from 'react-router-dom';
import './Nav.css';
function Nav() {
  return (
      
    <nav className="navbar bg-na " >
    <div className="container">
      
      <Link href='#' to='/'><img className="navbar-brand nav_img nav_siz" src={header_img} alt="header"></img></Link>
         
      
      <div className="">
        <ul className="nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link text-center text-dark" href="#">Email: info@chaseandhunt.net
                </a>
          </li>
          <li className="fb nav-item ">
                
                    <a className="nav-link active " href="https://www.facebook.com/chaseandhunt/" target="_blank" rel="noopener noreferrer"><img className="nav_img " src={fb}alt="Facbook"></img></a>
                </li>
                <li className="linkn nav-item">
                <a className="nav-link active" href="https://www.linkedin.com/company/chase-and-hunt" target="_blank" rel="noopener noreferrer"><img className="nav_img " src={ink} alt="Linkein"></img></a>
                </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  
  );
}

export default Nav;
