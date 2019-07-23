import React ,{useEffect}from 'react';
import './Job.css';

import { Link } from 'react-router-dom';

function Jobs() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
    return (
     
        <div className="jobs" id="Jobs">
         
         <div className="job-head">
            <div className="container">
                
               
                
                
            <div className="form-row p-4 jsearch">
            <h2  className="col-12 .col-md-12 text-light">>>> Find a job</h2>
           
                    <div className="col-6">
                   
                    <input type="text" className="form-control " placeholder="Job title, keywords, or company" required />
                    </div>
                    <div className="col-4">
                    
                    <input type="text" className="form-control" placeholder="Location" />
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-danger btn-md">job search</button>
                    </div>
                    
                </div>
                </div>   
                </div>
              


                <div className="container">
                    <div><h1 className="text-dark text-center p-4">Recent Jobs</h1></div>
                <div className="row effect bg-secondary" data-aos="fade">
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

        <div className="row effect bg-secondary" data-aos="fade">
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
        
        <div className="row effect bg-secondary" data-aos="fade">
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
        <div className="row effect bg-secondary" data-aos="fade">
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

        <div className="row effect bg-secondary" data-aos="fade">
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

        <div className="row effect bg-secondary" data-aos="fade">
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

        <div className="row effect bg-secondary" data-aos="fade">
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

        <div className="row effect bg-secondary" data-aos="fade">
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

        <div className="row effect bg-secondary" data-aos="fade">
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
        
        <div className="row effect bg-secondary" data-aos="fade">
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
        
        <nav className="p-4">
  <ul className="pagination pg">
    <li className="page-item ">
      <span className="page-link text-dark">Previous</span>
    </li>
    <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
    <li className="page-item active">
      <span className="page-link text-dark">
        2
        <span className="sr-only">(current)</span>
      </span>
    </li>
    <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link text-dark" href="#">Next</a>
    </li>
  </ul>
</nav>

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
         
        </div>
       
    );
  }
  
  export default Jobs;