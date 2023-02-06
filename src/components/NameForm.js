import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/nameform.css';


export default function NameForm() {

  const reduxStore = useSelector((store) => store);
  const dispatch = useDispatch();
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [job, setjob] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');

  const navigate = useNavigate();

 /* const basicdetails= () => {
   dispatch({
      type : 'BASIC_DETAILS',
      payload : {
        
        id: (new Date).getTime(),
        fname,lname,job,email,phone

        
      }

    })
  }*/
   
   function handleOnClick (e){
    e.preventDefault();
   console.log(fname);
    console.log(lname);
    console.log(job);
    console.log(email);
    console.log(phone);
  }
  return (


    <div >
      <div className='div'>

        <form onClick={handleOnClick}>
          <h1>Enter Details</h1>
          <label>First Name</label><br />
          <input type={'text'} value={fname} onChange={(e) => setfname(e.target.value)} /><br />
          <label>Last Name</label><br />
          <input type={'text'} value={lname} onChange={(e) => setlname(e.target.value)} />
          <br />
          <label>Job Title   </label><br />
          <input type={'text'} value={job} onChange={(e) => setjob(e.target.value)} /><br />
          <label>Email Id</label><br />
          <input type={'email'} value={email} onChange={(e) => setemail(e.target.value)} /><br />
          <label>Phone No</label><br />
          <input type={'text'} value={phone} onChange={(e) => setphone(e.target.value)} />

          <input type={'button'} className='btn1' value="Back" />
          <input type={'button'} className='btn2' value="Continue" onClick={() => {
            navigate("/summary")
          }} />
        </form>
      </div>
    </div>

  )
}
