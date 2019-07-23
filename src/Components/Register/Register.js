import React ,{useEffect}from 'react';

import { Link } from 'react-router-dom';

function Register() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
    return (
     
        <div className="Register" id="Register">
         <div className="Login">
            <div className="container lcon">
         <form className="container p-5">
        <h1 className="text-center p-3">Sign up</h1>

        <div className="form-group">
      
      <input  className="form-control"  placeholder="Full name"  required/>
    </div>
    <div className="form-group">
     
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" id="defaultLoginFormEmail" required/>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6">
      
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" id="defaultLoginFormPassword" required/>
    </div>
    <div className="form-group col-md-6">
      
      <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm" id="defaultLoginFormPassword" required/>
    </div>
    </div>
  
  <div className="form-group">
    <div className="form-check">
      
     <p className="form-check text-center"> By signing up , you agree to our Terms</p>
      
      
    </div>
  </div>
  <button className="btn btn-danger btn-block my-4" type="submit">Sign up</button>
</form>

         </div>
        </div>
        </div>
        
       
    );
  }
  
  export default Register;