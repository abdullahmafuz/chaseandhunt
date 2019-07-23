import React ,{useState,useEffect}from 'react';

import './Jobseeker.css';
import Userpro from './userpro';
import Resumepro from './Resumepro';
import Accountpro from './Accountpro';



function Jobseeker() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      })


      const [jindex,setJindex]=useState(1);
      

    
    return (
     
        <div className="jobseeker" id="Jobseeker">
         <div className="container">
         
         <div className="jobssidebar">
  <a className="active" href="#home" >Dashboard</a>
  <a href="#User" onClick={()=>{setJindex(1)}} > User Profile</a> 
  <a href="#Resume" onClick={()=>{setJindex(2)}}>Resume profile</a>
  <a href="#Setting" onClick={()=>{setJindex(3)}}>Account Settings</a>
  
  </div>
  <div>
  
    {
        jindex === 1?<Userpro />:(jindex === 2 ?<Resumepro /> :<Accountpro />)
     } 
    
  </div>



         </div>
         
        </div>
       
    );
  }
  
  export default Jobseeker;