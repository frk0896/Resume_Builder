import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/summaryform.css';

export default function Summary() {
  const [name, setname] = useState('');
  const [contact, setcontact] = useState('');
  const navigate = useNavigate();

  function handleOnClick() {
    console.log(name)
    console.log(contact)
  }
  return (
    
    <div >
      <div className='div'>
        <form onClick={handleOnClick}>
          <h1>Reference</h1>
          <label>Name</label><br />
          <input type={'text'}  value={name} onChange={(e) => setname(e.target.value)} /><br />
          <label>contact</label><br />
          <input type={'text'}  value={contact} onChange={(e) => setcontact(e.target.value)} /><br />
          <input type={'button'} className='btn1' value="Back" onClick={()=> {
            navigate("/skill")
          }}/>
          <input type={'submit'} className='btn2' value="Submit" onClick={()=> {
            navigate("/resume")
          }}/>
        </form>
      </div>
    </div>
    
  )
}
