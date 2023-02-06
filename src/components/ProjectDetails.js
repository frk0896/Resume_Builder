import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/summaryform.css';

export default function ProjectDetails() {
    const [pname, setpname] = useState('');
  const [description, setdescription] = useState('');
  const navigate = useNavigate();

  function handleOnClick() {
    console.log(pname)
    console.log(description)
  }
  return (
    
    <div >
      <div className='div'>
        <form onClick={handleOnClick}>
          <h1>Project Details</h1>
          <label>Name</label><br/>
          <input type={'text'} value={pname} onChange={(e) => setpname(e.target.value)}/><br/>
          <label>Description</label><br />
          <textarea className='textarea' value={description} onChange={(e) => setdescription(e.target.value)} /><br />
          <input type={'button'} className='btn1' value="Back" onClick={()=> {
            navigate("/communication")
          }}/>
          <input type={'button'} className='btn2' value="Continue" onClick={()=> {
            navigate("/skill")
          }}/>
        </form>
      </div>
    </div>
    
  )
}
