import { useEffect, useRef, useState } from 'react';
import './BookingForm.scss';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ])
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        'res-date': '',
        'res-time': '',
        guests:0,
        occasion: ''
    });

    const fieldChange = event => {
        const {id, value} = event.target;

        if(id === 'phone'){
            const cleanedPhoneNumber = value.replace(/\D/g, '');
            setForm({...form, [id]: cleanedPhoneNumber});
        }else{
            setForm({...form, [id]: value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = submitAPI(form);
        if(result){
            setForm({
                firstName: '',
                lastName: '',
                phone: '',
                'res-date': '',
                'res-time': '',
                guests:0,
                occasion: ''
            });
            navigate("/confirmed");
        }
    };

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    useEffect(()=>{
        const getDate = new Date(form['res-date']);
        const result = fetchAPI(getDate);
        if(result) setAvailableTimes(result);
    },[form['res-date']])

    return (
        <section className='sectionForm'>
            <div className='form_section-title'>
                <h2>RESERVATION</h2>
                <p>Book a Table</p>
            </div>
            <form id='form' onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className='inputData'
                        type="text"
                        placeholder='Ej. Farid'
                        name="firstName"
                        id="firstName"
                        required={true}
                        value={form.firstName}
                        onChange={(e) => fieldChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className='inputData'
                        type="text"
                        placeholder='Ej. Cure'
                        name="lastName"
                        id="lastName"
                        required={true}
                        value={form.lastName}
                        onChange={(e) => fieldChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Your Phone</label>
                    <input
                        className='inputData'
                        type="tel"
                        placeholder='Ej. 3112341111'
                        maxLength={10}
                        minLength={7}
                        name="phone"
                        id="phone"
                        required={true}
                        value={form.phone}
                        onChange={(e) => fieldChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        className='inputDate'
                        type="date"
                        id="res-date"
                        required={true}
                        value={form["res-date"]}
                        onChange={(e) => fieldChange(e)}
                    />
                </div>
                <div className='container-select'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" required={true} value={form["res-time"]} onChange={(e) => fieldChange(e)}>
                        {
                            availableTimes.map((time, i) => (
                                <option key={i}>{time}</option>
                            ))
                        }
                    </select>
                    <i></i>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        className='inputData'
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        required={true}
                        value={form.guests}
                        onChange={(e) => fieldChange(e)}
                    />
                </div>
                <div className='container-select'>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" required={true} value={form.occasion} onChange={(e) => fieldChange(e)} >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <i></i>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}
