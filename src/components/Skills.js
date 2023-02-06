import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/summaryform.css';

export default function Skills() {
  const [skill, setskill] = useState('');
  const navigate = useNavigate();

  function handleOnClick() {
    console.log(skill)
  }
  return (
    
    <div >
      <div className='div'>
        <form onClick={handleOnClick}>
          <h1>Skills</h1>
          <label>Technologies known</label><br />
          <textarea className='textarea' value={skill} onChange={(e) => setskill(e.target.value)} />
        
            <br />
          <input type={'button'} className='btn1' value="Back" onClick={()=> {
            navigate("/projectdetails")
          }}/>
          <input type={'button'} className='btn2' value="Continue" onClick={()=> {
            navigate("/reference")
          }}/>
        </form>
      </div>
    </div>
    
  )
}
