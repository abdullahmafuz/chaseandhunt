import React ,{useEffect,useState}from 'react';

import './Jobseeker.css';


function Resumepro() {
    

      const [fields, setFields] = useState([
        {
           qualification: '' ,
           grad : '',
           school :''

        }

        
      ]);

  


      function handleChangequalif(i, event) {
        const qualifications = [...fields];
        qualifications[i].qualification = event.target.value;
        setFields(qualifications);
       
      }
      function handleChangegrad(i, event) {
        
        const grads = [...fields];
        grads[i].grad = event.target.value;
        setFields(grads);
        
      }
      function handleChangeschool(i, event) {
        
        const schools = [...fields];
        schools[i].school = event.target.value;
        setFields(schools);
      }
    
      function handleAdd() {
        const qualifications = [...fields];
        qualifications.push({ qualification: '' });
        setFields(qualifications);

        const grads = [...fields];
        grads.push({ grad: '' });
        setFields(grads);

        const schools = [...fields];
        schools.push({ school: '' });
        setFields(schools);
      }
    
      function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
      }
   

      const [workfields, setworkFields] = useState([
        {
          job: '' ,
          experience : '',
           company :''

        }

        
      ]);

      function handleAddwork() {
        const jobs = [...workfields];
        jobs.push({ job: '' });
        setworkFields(jobs);

        const experiences= [...workfields];
        experiences.push({ experience: '' });
        setworkFields(experiences);

        const companys = [...workfields];
        companys.push({ company: '' });
        setworkFields(companys);
      }

      function handleRemovework(i) {
        const values = [...workfields];
        values.splice(i, 1);
        setworkFields(values);
      }



      function handleChangejob(i, event) {
        const jobs = [...workfields];
        jobs[i].job = event.target.value;
        setworkFields(jobs);
       
      }
      function handleChangeexper(i, event) {
        
        const experiences = [...workfields];
        experiences[i].experience = event.target.value;
        setworkFields(experiences);
        
      }
      function handleChangecomp(i, event) {
        
        const companys = [...workfields];
        companys[i].company = event.target.value;
        setworkFields(companys);
      }



      const [skillfields, setskillFields] = useState([
        {
          skill: '' 
          
        }
      ])


      function handleAddskill() {
        const skills = [...skillfields];
        skills.push({ skill: '' });
        setskillFields(skills);

      }
      function handleChangeskill(i, event) {
        
        const skills = [...skillfields];
        skills[i].skill = event.target.value;
        setskillFields(skills);
      }

      function handleRemoveskill(i) {
        const skills = [...skillfields];
        skills.splice(i, 1);
        setskillFields(skills);
      }


      
      const [achievefields, setachieveFields] = useState([
        {
          achieve: '' 
          
        }
      ])


      function handleAddachieve() {
        const achieves = [...achievefields];
        achieves.push({ achieve: '' });
        setachieveFields(achieves);

      }
      function handleChangeachievel(i, event) {
        
        const achieves = [...achievefields];
        achieves[i].achieve = event.target.value;
        setachieveFields(achieves);
      }

      function handleRemoveachieve(i) {
        const achieves = [...achievefields];
        achieves.splice(i, 1);
        setachieveFields(achieves);
      }







    return (
     
        <div className="jobseeker" id="Jobseeker">
         <div className="container ">
         
         

<div className="jobscontents p-4 text-center">
  <h2>Resume profile</h2>
</div>

<div className="jobscontents p-4">
<h5>Education Levels</h5>

{fields.map((field, idx1) => {
  return (
    <div className="row p-3" key={idx1} >
    <div className="col-md-auto">
    <input type="text" className="form-control"  placeholder="Qualification's" value={field.qualification} onChange={e => handleChangequalif(idx1,e)} required />
    </div>
    <div className="col-md-auto">
    <input type="number" className="form-control"  placeholder="Graduation Year" value={field.grad} onChange={e => handleChangegrad(idx1,e)}required />
    </div>
    <div className="col-md-auto">
    <input type="text" className="form-control"  placeholder="School/University" value={field.school} onChange={e => handleChangeschool(idx1,e)} required />
    </div>
    <div className="col col-lg-2 ">
      <button type="button" className="btn btn-danger " onClick={() => handleRemove(idx1)}>
              X
            </button>
            </div>
  </div>
  );
})}

  <button className="btn btn-danger " type="submit" onClick={() => handleAdd()} >Add New +</button>
</div>{console.log(fields)}








<div className="jobscontents p-4">
<h5>Work Experience</h5>

{workfields.map((workfield, idx) => {
  return (
    <div className="row p-3" key={idx} >
    <div className="col-md-auto">
    <input type="text" className="form-control"  placeholder="Job Title" value={workfield.job} onChange={e => handleChangejob(idx,e)} required />
    </div>
    <div className="col-md-auto">
    <input type="number" className="form-control"  placeholder="Year of Experience" value={workfield.experience} onChange={e => handleChangeexper(idx,e)}required />
    </div>
    <div className="col-md-auto">
    <input type="text" className="form-control"  placeholder="Company Name" value={workfield.company} onChange={e => handleChangecomp(idx,e)} required />
    </div>
    <div className="col col-lg-2 ">
      <button type="button" className="btn btn-danger "  onClick={() => handleRemovework(idx)}>
              X
            </button>
            </div>
  </div>
  );
})}

  <button className="btn btn-danger " type="submit" onClick={() => handleAddwork()} >Add New +</button>
</div>

<div className="jobscontents p-4">
<h5>Skills & Expertise</h5>
<div className="row p-3" >
{skillfields.map((skillfield, idx) => {
  return (
    
    <div className="col-4" key={idx}>
      
    <input type="text" className="form-control"  placeholder="Job Title" value={skillfield.skill} onChange={e => handleChangeskill(idx,e)} required />
    <div className="col-4" >
    <button type="button" className="btn btn-danger " onClick={() => handleRemoveskill(idx)}>{console.log(idx)}
              X
            </button>
            
    </div>
    </div>
      
            
            
            
  
  );
})}
</div>

  <button className="btn btn-danger " type="submit" onClick={() => handleAddskill()} >Add New +</button>
</div>




<div className="jobscontents p-4">
<h5>Achievements</h5>
<div className="row p-3" >
{achievefields.map((achievefield, idx) => {
  return (
    
    <div className="col-4" key={idx}>
      
    <input type="text" className="form-control"  placeholder="Job Title" value={achievefield.achieve} onChange={e => handleChangeachievel(idx,e)} required />
    <div className="col-4" >
    <button type="button" className="btn btn-danger " onClick={() => handleRemoveachieve(idx)}>{console.log(idx)}
              X
            </button>
            
    </div>
    </div>
      
            
            
            
  
  );
})}
</div>

  <button className="btn btn-danger " type="submit" onClick={() => handleAddachieve()} >Add New +</button>

  
</div>
<div className="jobscontents p-4">
  <h5 className="p-5">Upload your CV </h5>
<div className="custom-file p-3">
  <input type="file" className="custom-file-input" id="customFile" />
  <label className="custom-file-label" for="customFile">Choose file</label>
</div>
</div>

         </div>
         

        </div>
       
    );
  }
  



  
  export default Resumepro;