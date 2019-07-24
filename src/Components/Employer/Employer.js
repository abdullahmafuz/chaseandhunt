import React, { useState,useEffect } from 'react';

import './Employer.css';
import {Link } from 'react-router-dom'
import s1 from '../asset/s1.png';
import s2 from '../asset/s2.png';
import s3 from '../asset/s3.png';
import s4 from '../asset/s4.png';
import s5 from '../asset/s5.png';
import s6 from '../asset/s6.png';
import info from './infoemploy.json';

function Employer() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
    const [display, setDisplay] = useState(true);
    
    const [index ,setIndex]=useState(0);

    return (
     
        <div className="Companies" id="Employer">

        <div className="container">
          
                        <div className="empside">

                  <a className="active" onClick={()=>setIndex(0)}>Employer Service</a>
                  
                  <a  className="active1"onClick={()=>setIndex(1)} >WHAT MAKES US A BETTER CHOICE?</a>
                  <a  className="active1" onClick={()=>setIndex(2)}>How can we add value to your organisation?</a>
                  <ul>
                  <a  onClick={()=>setIndex(3)}>Minimising your timeframes and lead time</a>
                  
                  <a  onClick={()=>setIndex(4)}>Industry Experience</a>
                  <a  onClick={()=>setIndex(5)}>Wider Network</a>
                  <a  onClick={()=>setIndex(6)}>Headhunters</a>
                  <a  onClick={()=>setIndex(7)}>Associate Partners & Extended Reach</a>
                  </ul>
                  
                  <a  className="active1" onClick={()=>setIndex(8)}>How do we find the right people for you ? </a>
                  <ul>
                  <a  onClick={()=>setIndex(9)}>Research</a>
                  <a  onClick={()=>setIndex(10)}>Search</a>
                  <a onClick={()=>setIndex(11)}>Shortlisting</a>
                  <a  onClick={()=>setIndex(12)}>Selection</a>
                  <a  onClick={()=>setIndex(13)}>Monitoring Market Trends</a>
                  <a  onClick={()=>setIndex(14)}>Flexibility & Speed</a>
                  </ul>
                </div>

                <div className="empcontent p-5">
                  {
                    info.map((data,idx)=>{
                        if(index === idx){
                          return(<div className="container " key={idx}>
                                <h4>{data.h1}</h4>
                                <h6>{data.h2}</h6>
                                <p>{data.h2p}</p>
                                <p>{data.p1}</p>
                                <p>{data.p2}</p>
                                <p>{data.p3}</p>
                                <p>{data.p4}</p>
                                <p>{data.p5}</p>
                                <p>{data.p6}</p>
                                <p>{data.p7}</p>


                            </div>
                            
                            )
                        }
                    })
                  }
                </div>

                    </div>

                    
      






                    <section className="py-5 bg-image overlay-primary fixed overlay empsign info">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="text-white text-center">Want to register your vacancy ?</h2>
            <p className="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
          </div>
          <div className="col-md-3 ml-auto">
          <Link className="btn btn-danger py-3 btn-block"  href="#Vacancy" to='/vacancy'>Register your vacancy</Link>
          </div>
        </div>
      </div>
    </section>











            <div className="container text-center p-2 text-info"><h1>Industries</h1></div>

         <div className="container p-4">
        

         <div className="row crow">


         <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">Banking & Financial Services</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/0'><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
             
         

            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                    <div className="">
                        <img src={s3} alt="category" />
                        <h3 className="smh3">	Real Estate & Property Management</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/1' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s4} alt="category" />
                        <h3 className="smh3">	Executive & Senior Management</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/2' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s5} alt="category" />
                        <h3 className="smh3">	Engineering & Manufacturing</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/3' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s6} alt="category" />
                        <h3 className="smh3">Office Support and Administration</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/4' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
            </div>

            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s2} alt="category" />
                        <h3 className="smh3">IT & E Commerce</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/5' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
            </div>

            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Retail</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/6' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	FMCG</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/7' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Hospitality</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/8' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Construction</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/9' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	HR</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/10' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         

            </div>


            






            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Accountancy & Finance</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/11' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>



            

            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Marketing</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/12' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Sales</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/13' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className="col-6 col-sm-3 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	PA & Secretarial</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/14' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>





  

            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
                
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Heath care </h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/15' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>

     
           
            

            <div className={display == false ?"collaps col-6 col-sm-3 crow": "collaps col-6 col-sm-3 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                        <img src={s1} alt="category" />
                        <h3 className="smh3">	Insurance</h3>
                        <p><Link className="nav-link1"  href="#" to='/indetail/16' ><button type="button" className="btn btn-danger">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            
            

            </div>

          </div>
          
         <div className="combtn">
             
                <p className="text-center">
                <button type="button" onClick={()=> setDisplay(!display)} className="btn btn-danger" >
           {
               display == false?<a>show less</a> :<a>show more</a>
           }
        </button>
                    </p>  
          

         </div>
          
            

         

    <div className="features">
        <div className="container">
          <h1 className="text-center p-3">Benefit of chase and hunt consultancy </h1>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated fadeInDown" >
                <div className="features-icon">
                  
                 
                </div>
                <div className="features-content">
                  <h4>
                    Full Documented
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated1 fadeInDown ">
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                    Clean & Modern Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated2 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                    Great Features
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div> 
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated3 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                    Completely Customizable
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>           
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated4 fadeInDown " >
                <div className="features-icon">
                 
                </div>
                <div className="features-content">
                  <h4>
                    100% Responsive Layout
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated5 fadeInDown " >
                <div className="features-icon">
                 
                </div>
                <div className="features-content">
                  <h4>
                    User Friendly
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated6 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                    Awesome Layout
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated7 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                    High Quality
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated8 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                    Free Google Fonts Use
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut magni perferendis repellat rerum assumenda facere. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     


             
        </div>
       
    );
  }
  
  export default Employer;