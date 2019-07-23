import React ,{useEffect} from 'react';
import './Contact.css';

import { Link } from 'react-router-dom';


function Contact() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
    return (
     
        <div className="contact bg-dark" id="Contact">
            <div className="chead">
                  <h2 className="con-con1 text-center">Talk to Us</h2>
                
            </div>
        <section>
            <div className="container text-white con-con">
                
                <p className="con-p">Got a questions ?</p>
                <p className="con-p">Send us a message and we'll respond as soon as possible</p>
            </div>
      <div className="container con-con">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <form action="#" className="left-cl">
    
              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  
                  <input type="text" id="fname" className="form-control" placeholder="Your Full Name" required/>
                </div>
                <div className="col-md-6">
                  
                  <input type="number" id="lname" className="form-control" placeholder="Phone Number" required />
                </div>
              </div>
    
              <div className="row form-group">
    
                <div className="col-md-12">
                  
                  <input type="email" id="email" className="form-control" placeholder="Email" required />
                </div>
              </div>
    
              <div className="row form-group">
    
                <div className="col-md-12">
                  
                  <input type="subject" id="subject" className="form-control"placeholder="Subject" required />
                </div>
              </div>
    
              <div className="row form-group">
                <div className="col-md-12">
                  
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control"
                    placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>
                
              <div className="row form-group ">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-danger btn-md text-white" />
                </div>
              </div>
    
    
            </form>
          </div>
          <div className="col-lg-5 ml-auto ">
            <div className="p-4 mb-3 bg-white right-cl">
              
                <div className="info bg-danger">
                <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4">Deira , Dubai, U.A.E </p>
                </div>
                
              
                    <div className="info bg-danger">
                    <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4">+971 55 5619980</p>
                    </div>
              <div className="info bg-danger">
              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0">info@chaseandhunt.net</p>
              </div>
                
              
    
            </div>
          </div>
        </div>
        
      </div>
      
      </section>
    <section className="py-5 bg-image overlay-primary fixed overlay sign1 info">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="text-white">Want to post a Job ?</h2>
            <p className="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
          </div>
          <div className="col-md-3 ml-auto">
          <Link className="btn btn-danger py-3 btn-block"  href="#Vacancy" to='/vacancy'>Register your vacancy</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-image overlay-primary fixed overlay sign">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="text-white">Looking For A Job?</h2>
            <p className="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
          </div>
          <div className="col-md-3 ml-auto">
            <Link className="btn btn-warning btn-block btn-lg"  href="#" to='/register'>Sign Up</Link>
          </div>
        </div>
      </div>
    </section>
         
        </div>
       
    );
  }
  
  export default Contact;