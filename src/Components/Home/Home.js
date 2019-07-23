import React ,{useEffect}from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import i1 from './HomeSlider/1.png';
import i2 from './HomeSlider/2.jpg';
import i3 from './HomeSlider/3.jpg';
import i4 from './HomeSlider/4.jpg';

import img1 from './HomeSlider/img1.jpg';
import img2 from './HomeSlider/img2.jpg';
import img3 from './HomeSlider/img3.jpg';


import c1 from './HomeSlider/clients/Damac-Logo.png';
import c2 from './HomeSlider/clients/Emami.png';
import c3 from './HomeSlider/clients/emirate.jpg';
import c4 from './HomeSlider/clients/Emirites-NBD.png';
import c5 from './HomeSlider/clients/icare.png';
import c6 from './HomeSlider/clients/masafi.png';
import c7 from './HomeSlider/clients/wasl.jpg';
import c8 from './HomeSlider/clients/zulekha.png';

import s1 from '../asset/s1.png';
import s2 from '../asset/s2.png';
import s3 from '../asset/s3.png';
import s4 from '../asset/s4.png';
import s5 from '../asset/s5.png';
import s6 from '../asset/s6.png';



function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
    return (
     
        <div className="container1" id='home'>
         

  <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="5000">
      <img src={i1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-interval="5000">
      <img src={i2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-interval="5000">
      <img src={i3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


       <section className="service">
       
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center ">
            <h2 className="section-sub-title">Our Services</h2>
            
          </div>
        </div>
        
        <div className="row align-items-stretch">

        <div className="wrapper">
          <div className="card">
          
          <div className="text-center p-3">
                    <div className="">
                        <img src={s1} alt="category" />
                        <h3>Banking & Financial Services</h3>
                        <p><a><button type="button" className="btn btn-danger">Explore More </button></a></p>
                    </div>
                </div>
          </div>
          </div>
         


          <div className="wrapper">
          <div className="card">
          <div className="text-center p-3">
                    <div className="">
                        <img src={s2} alt="category" />
                        <h3>IT & E Commerce</h3>
                        <p><a><button type="button" className="btn btn-danger">Explore More </button></a></p>
                    </div>
                </div>
          </div>
          </div>


          <div className="wrapper">
          <div className="card">
          <div className="text-center p-3">
                    <div className="">
                        <img src={s3} alt="category" />
                        <h3>	Real Estate & Property Management</h3>
                        <p><a><button type="button" className="btn btn-danger">Explore More </button></a></p>
                    </div>
                </div>
          </div>
          </div>


          <div className="wrapper">
          <div className="card">
          <div className="text-center p-3">
                    <div className="">
                        <img src={s4} alt="category" />
                        <h3>	Executive & Senior Management</h3>
                        <p><a><button type="button" className="btn btn-danger">Explore More </button></a></p>
                    </div>
                </div>
            </div>
          </div>
         
          
          <div className="wrapper">
          <div className="card">
          <div className="text-center p-3">
                    <div className="">
                        <img src={s5} alt="category" />
                        <h3>	Engineering & Manufacturing</h3>
                        <p><a><button type="button" className="btn btn-danger">Explore More </button></a></p>
                    </div>
                </div>
          </div>
          </div>



          <div className="wrapper">
          <div className="card">
          
          <div className="text-center p-3">
                    <div className="">
                        <img src={s6} alt="category" />
                        <h3>Office Support and Administration</h3>
                        <p><a><button type="button" className="btn btn-danger">Explore More </button></a></p>
                    </div>
                </div>
          </div>
          </div>

        </div>
      </div>
    </section>




     <section className="how ">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="section-sub-title text-center">How it works</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="box p-3">
              <h2 className="text-black">Innovate</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
              <ul className="list-unstyled ul-check primary">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className=" box p-3">
              <h2 className="text-black">Create</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
              <ul className="list-unstyled ul-check primary">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className=" box p-3 p-3">
              <h2 className="text-black">Scale</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
              <ul className="list-unstyled ul-check primary">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

        

    <section className="clients container">
      <div className="container">
        <h2 className="">
          Clients & Partners
        </h2>
        <div className="row"> 
          <div className="row p-3">
            <div className="items">
              <img src={c1} alt=""/>
            </div>
            <div className="items">
            <img src={c2} alt=""/>
            </div>
            <div className="items">
            <img src={c3} alt=""/>
            </div>
            <div className="items">
            <img src={c4} alt=""/>
            </div>
            <div className="items">
            <img src={c5} alt=""/>
            </div>
            <div className="items">
            <img src={c6} alt=""/>
            </div>
            <div className="items">
            <img src={c7} alt=""/>
            </div>
            <div className="items">
            <img src={c8} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>



<div className="jobhome">
    <div className="container p-4">
         
         <div className=" site-section  effect1 jobhome">
      <div className="container">
        <div className="row justify-content-start text-left mb-5">
          <div className="col-md-9" data-aos="fade">
            <h2 className="font-weight-bold text-black">Hot Jobs</h2>
          </div>
          <div className="col-md-3" data-aos="fade" data-aos-delay="200">
          <Link className="btn btn-danger py-3 btn-block"  href="#Vacancy" to='/vacancy'>Register your vacancy</Link>
          </div>
        </div>

        
       

        <div className="row effect bg-white text-dark" data-aos="fade">
         <div className="col-md-12">
           <div className="job-post-item p-4 d-block d-md-flex align-items-center">

              <div className="mb-4 mb-md-0 mr-5">
               <div className="job-post-item-header d-flex align-items-center">
                 <h2 className="mr-3 text-black h4">Full Stack Developer</h2>
                 <div className="badge-wrap">
                  <span className="bg-warning text-white badge py-2 px-4">Full Time</span>
                 </div>
               </div>
               <div className="job-post-item-body d-block d-md-flex">
                 <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">Google, Inc.</a></div>
                 <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
               </div>
              </div>

              <div className="ml-auto">
                
                <a href="#" className="btn btn-danger py-2">View details</a>
              </div>

           </div>
         </div>
        </div>

        <div className="row effect bg-white text-dark" data-aos="fade">
         <div className="col-md-12">
           <div className="job-post-item p-4 d-block d-md-flex align-items-center">

              <div className="mb-4 mb-md-0 mr-5">
               <div className="job-post-item-header d-flex align-items-center">
                 <h2 className="mr-3 text-black h4">Open Source Interactive Developer</h2>
                 <div className="badge-wrap">
                  <span className="bg-info text-white badge py-2 px-4">Freelance</span>
                 </div>
               </div>
               <div className="job-post-item-body d-block d-md-flex">
                 <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">New York Times</a></div>
                 <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
               </div>
              </div>
              
              <div className="ml-auto">
                
                <a href="#" className="btn btn-danger py-2">View details</a>
              </div>

           </div>
         </div>
        </div>
        
        <div className="row effect bg-white text-dark" data-aos="fade">
         <div className="col-md-12">

           <div className="job-post-item p-4 d-block d-md-flex align-items-center">

              <div className="mb-4 mb-md-0 mr-5">
               <div className="job-post-item-header d-flex align-items-center">
                 <h2 className="mr-3 text-black h4">Frontend Development</h2>
                 <div className="badge-wrap">
                  <span className="bg-secondary text-white badge py-2 px-4">Internship</span>
                 </div>
               </div>
               <div className="job-post-item-body d-block d-md-flex">
                 <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">Facebook, Inc.</a></div>
                 <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
               </div>
              </div>

              <div className="ml-auto">
                
                <a href="#" className="btn btn-danger py-2">View details</a>
              </div>
           </div>

         </div>
        </div>
        </div>
        </div>
         </div>
        </div>

         <section className="py-5 bg-image overlay-primary fixed overlay sign">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="text-white">Looking For A Job?</h2>
            <p className="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
          </div>
          <div className="col-md-3 ml-auto">
          <Link className="btn btn-warning btn-block btn-lg"  href="#Login" to='/login'>Sign Up</Link>
          </div>
        </div>
      </div>
    </section>



    <section id="blog">
      
      <div className="container">
        <h1 className="section-title mb-3 p-5 text-center">
        Our Blog Posts
        </h1>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 blog-item">
            
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src={img1} alt="" />
                </a>                
              </div>
              <div className="blog-item-text">
                <div className="meta-tags">
                  <span className="date"><i className="ti-calendar"></i> Dec 20, 2017</span>
                  <span className="comments"><a href="#"><i className="ti-comment-alt"></i> 5 Comments</a></span>
                </div>
                <a href="single-post.html">
                  <h3>
                    Tips to write an impressive resume online for beginner
                  </h3>
                </a>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.
                </p>
                <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
              </div>
            </div>
           
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 blog-item">
            
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src={img2} alt="" />
                </a>                
              </div>
              <div className="blog-item-text">
                <div className="meta-tags">
                  <span className="date"><i className="ti-calendar"></i> Jan 20, 2018</span>
                  <span className="comments"><a href="#"><i className="ti-comment-alt"></i> 5 Comments</a></span>
                </div>
                <a href="single-post.html">
                  <h3>
                    Let's explore 5 cool new features in JobBoard theme
                  </h3>
                </a>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.
                </p>
                <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
              </div>
            </div>
            
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 blog-item">
            
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src={img3} alt=""/>
                </a>                
              </div>
              <div className="blog-item-text">
                <div className="meta-tags">
                  <span className="date"><i className="ti-calendar"></i> Mar 20, 2018</span>
                  <span className="comments"><a href="#"><i className="ti-comment-alt"></i> 5 Comments</a></span>
                </div>
                <a href="single-post.html">
                  <h3>
                    How to convince recruiters and get your dream job
                  </h3>
                </a>
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.
                </p>
                <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>




       </div>
    );
  }
  
  export default Home;