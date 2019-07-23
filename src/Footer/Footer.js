import React from 'react';
import './Footer.css'
import header_img from '../Components/asset/img/chase&hunt_logo.png';
import fb from '../Components/asset/img/facebook_icon.png';
import ink from '../Components/asset/img/in.png';
import twitter from '../Components/asset/img/twitter.png'
import insta from '../Components/asset/img/insta.png'

import {Link} from 'react-router-dom'
function Footer() {
    return (
     
      
         <footer className="foot" id="foot">
    	
    	<section className="footer-Content">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-3 col-sm-6 col-xs-12">
              <div className="widget">
                <h3 className="block-title"><img className="foot-img" src={header_img} alt="header"></img></h3>
                <div className="textwidget">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. Sed ex est, consectetur eget facilisis sed.</p>
                </div>
              </div>
            </div>
    				<div className="col-md-3 col-sm-6 col-xs-12">
    					<div className="widget">
    						<h3 className="block-title">LEGAL</h3>
  							<ul className="menu colorlink">
                  <li><Link to="/" href="#"><p className='fp-color'>Terms and conditions</p></Link></li>
                  <li><Link to="/" href="#"><p className='fp-color'>Privacy policy</p></Link></li>
                  <li><Link to="/" href="#"><p className='fp-color'>License</p></Link></li>
                  <li><Link to="/" href="#"><p className='fp-color'>Terms & Conditions</p></Link></li>
                  <li><Link to="/" href="#"><p className='fp-color'>Contact</p></Link></li>
                </ul>
    					</div>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-12">
    					<div className="widget">
                <h3 className="block-title">Trending Jobs</h3>
                <ul className="menu">
                  <li><Link href="#" to="/"><p className='fp-color'>Android Developer</p></Link></li>
                  <li><Link href="#" to="/"><p className='fp-color'>Senior Accountant</p></Link></li>
                  <li><Link href="#" to="/"><p className='fp-color'>Frontend Developer</p></Link></li>
                  <li><Link href="#" to="/"><p className='fp-color'>Junior Tester</p></Link></li>
                  <li><Link href="#" to="/"><p className='fp-color'>Project Manager</p></Link></li>
                </ul>
              </div>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-12">
    					<div className="widget">
    						<h3 className="block-title">Follow Us</h3>
                <div className="bottom-social-icons social-icon">  
                <a className="nav-link1" href="https://www.facebook.com/chaseandhunt/" target="_blank" rel="noopener noreferrer"><img className="nav_img1 " src={fb}alt="Facbook"></img></a>
                <a className="nav-link1" href="https://www.linkedin.com/company/chase-and-hunt" target="_blank" rel="noopener noreferrer"><img className="nav_img1 " src={ink} alt="Linkein"></img></a>                 
                
                </div>	
                <p>Join our mailing list to stay up to date and get notices about our new releases!</p>
                
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    	
    	<div id="copyright">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
              <div className="site-info text-center">
                  <Link href='#' to="/"><p className='fp-color'>Privacy Policy</p></Link>
                <p>Copyright &copy; Chase and Hunt Consultancy</p>
                
              </div>   
    				</div>
    			</div>
    		</div>
    	</div>
    	

    </footer>
    
 
    );
  }
  
  export default Footer;