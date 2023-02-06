import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/educationform.css';

export default function CommunicationDetails() {
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [district, setdistrict] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState();

    const navigate = useNavigate();

    function handleOnClick() {
        console.log(address);
        console.log(city);
        console.log(district);
        console.log(state);
        console.log(country);
    }

    return (
        <div>
            <div className='div'>
                <form onClick={handleOnClick}>
                    <h1>Communication Details </h1>
                    <label>Address</label><br/>
                    <input type={'text'}  value={address} onChange={(e) => setaddress(e.target.value)} /><br/>
                    <label>City</label><br/>
                    <input type={'text'}  value={city} onChange={(e) => setcity(e.target.value)} /><br/>
                    <label>District</label><br />
                    <input type={'text'} value={district} onChange={(e) => setdistrict(e.target.value)} />
                    <br />
                    <label>State</label><br />
                    <input type={'text'} value={state} onChange={(e) => setstate(e.target.value)} /><br />
                    <label>Country</label><br/>
                    <input type={'text'} value={country} onChange={(e) => setcountry(e.target.value)} /><br/>
                    <input type={'button'} className='btn1' value="Back" onClick={() => {
                        navigate("/workexperience")
                    }} />
                    <input type={'button'} className='btn2' value="Continue" onClick={() => {
                        navigate("/projectdetails")
                    }} />
                </form>
            </div>

        </div>
    )
}
