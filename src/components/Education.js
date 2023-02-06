import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/educationform.css';

export default function Education() {
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    const [institute, setinstitute] = useState('');
    const [course, setcourse] = useState('');
    const [mark, setmark] = useState();

    const navigate = useNavigate();

    function handleOnClick() {
        console.log(from);
        console.log(to);
        console.log(institute);
        console.log(course);
        console.log(mark);
    }

    return (
        <div>
            <div className='div'>
                <form onClick={handleOnClick}>
                    <h1>Education Details </h1>
                    <label>From</label><br/>
                    <input type={'text'} className='t1' value={from} onChange={(e) => setfrom(e.target.value)} /><br/>
                    <label>To</label><br/>
                    <input type={'text'} className='t1' value={to} onChange={(e) => setto(e.target.value)} /><br/>
                    <label>Institute</label><br />
                    <input type={'text'} value={institute} onChange={(e) => setinstitute(e.target.value)} />
                    <br />
                    <label>Course</label><br />
                    <input type={'text'} value={course} onChange={(e) => setcourse(e.target.value)} /><br />
                    <label>Mark</label><br/>
                    <input type={'text'} value={mark} onChange={(e) => setmark(e.target.value)} /><br/>
                    <input type={'button'} className='btn1' value="Back" onClick={() => {
                        navigate("/summary")
                    }} />
                    <input type={'button'} className='btn2' value="Continue" onClick={() => {
                        navigate("/workexperience")
                    }} />
                </form>
            </div>

        </div>
    )
}
