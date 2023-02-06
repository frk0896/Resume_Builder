import React from 'react'
import { useSelector } from 'react-redux'
import './style/resume.css'

export default function Resume() {
  //const reduxStore = useSelector((store) => store);

 // const details = reduxStore.basicDetails.map();
    

  return (
    <div className='maindiv'>
      <div className='d1'>
        <label><h1 className='h11'>Name</h1></label><br/><br/>
        <label><h2 className='h22'>Job Title</h2></label>
        
      </div>
      <div className='d2'>
     <br/>
        <h3>Contact Info</h3>
        <hr></hr>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <h3>Education</h3>
        <hr></hr>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h3>Skills</h3>
        <hr></hr>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <div className='d3'>
        <br/>
        
        <h3 className='h33'>Summary</h3>
        <hr></hr>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <h3 className='h33'>Experience</h3>
        <hr></hr>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <h3 className='h33'>Project Details</h3>
        <hr></hr>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <h3 className='h33'>Reference</h3>
        <hr></hr>
        <br/><br/><br/><br/>
      </div>
    </div>
  )
}
