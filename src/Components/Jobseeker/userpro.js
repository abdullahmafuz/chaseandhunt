import React ,{useEffect}from 'react';

import './Jobseeker.css';


function Userpro() {
   
    
    return (
     
        <div className="jobseeker" id="Jobseeker">
         <div className="container ">
         
        

<div className="jobscontents p-3 text-center">
  <h2>User profile</h2>
  <form className="p-5">
         <div className="form-row">
      <div className="form-group col-md-6 p-3">
      
      <input type="text" className="form-control"  placeholder="Full Name" required/>
    </div>
    <div className="form-group col-md-6 p-3">
      <input type="number" className="form-control"  placeholder="phone number" required />
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6 p-3">
      
    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option  value="none">Gender *</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div className="form-group col-md-6 p-3">
      <input type="number" className="form-control"  placeholder="age"  required/>
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6 p-3">
      
    <input type="text" className="form-control"  placeholder="Nationality" required/>
    </div>
    <div className="form-group col-md-6 p-3">
      <input type="text" className="form-control"  placeholder="Current loction" required/>
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6 p-3">
      
    <input type="text" className="form-control"  placeholder="Visa Status" required />
    </div>
    <div className="form-group col-md-6 p-3">
      <input type="text" className="form-control"  placeholder="Current job status" required />
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6 p-3">
      
    <input type="text" className="form-control"  placeholder="Education level" required />
    </div>
    <div className="form-group col-md-6 p-3">
      <input type="text" className="form-control"  placeholder="Year of experience" required />
    </div>
    </div>
    
    
        <button className="btn btn-danger col-md-4 btn-md" type="submit">SAVE</button>
        
        </form>
      </div>

         </div>
         
        </div>
       
    );
  }
  
  export default Userpro;