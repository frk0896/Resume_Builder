import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/summaryform.css';

export default function Summary() {
  const [summary, setsummary] = useState('');
  const navigate = useNavigate();

  function handleOnClick() {
    console.log(summary)
  }
  return (
    
    <div >
      <div className='div'>
        <form onClick={handleOnClick}>
          <h1>Add Summary</h1>
          <label>Summary</label><br />
          <textarea className='textarea' value={summary} onChange={(e) => setsummary(e.target.value)} /><br />
          <input type={'button'} className='btn1' value="Back" onClick={()=> {
            navigate("/")
          }}/>
          <input type={'button'} className='btn2' value="Continue" onClick={()=> {
            navigate("/education")
          }}/>
        </form>
      </div>
    </div>
    
  )
}
