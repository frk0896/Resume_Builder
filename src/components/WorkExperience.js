import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/experience.css'

export default function WorkExperience() {

    const [from, setfrom] = useState();
    const [to, setto] = useState();
    const [companyname, setcompanyname] = useState('');
    const [description, setdescription] = useState('');

    const navigate = useNavigate();

    function handleOnClick() {
        console.log(from);
        console.log(to);
        console.log(companyname);
        console.log(description);

    }
    return (
        <div>
            <div className='div'>
                <form onClick={handleOnClick}>
                    <h1>Work Experience</h1>
                    <label>From</label><br/>
                    <input type={'text'} value={from} onChange={(e) => setfrom(e.target.value)} /><br />
                    <label>To</label><br />
                    <input type={'text'} value={to} onChange={(e) => setto(e.target.value)} /><br />
                    <label>Company Name</label><br />
                    <input type={'text'} value={companyname} onChange={(e) => setcompanyname(e.target.value)} />
                    <br />
                    <label>Description</label><br />
                    <textarea className='textarea' value={description} onChange={(e) => setdescription(e.target.value)} /><br />

                    <input type={'button'} className='btn1' value="Back" onClick={() => {
                        navigate("/education")
                    }} />
                    <input type={'button'} className='btn2' value="Continue" onClick={() => {
                        navigate("/communication")
                    }} />
                </form>
            </div>

        </div>
    )
}
