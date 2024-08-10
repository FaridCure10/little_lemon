import { useEffect, useMemo, useState } from 'react';
import './BookingForm.scss';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI, validate } from '../../../utils/constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useState([])
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        'res-date': '',
        'res-time': '',
        guests: 0,
        occasion: '',
        disabled: true
    });

    const fieldChange = event => {
        const {id, value} = event.target;

        const newForm = Object.assign({},form);
        if(id === 'phone'){
            const cleanedPhoneNumber = value.replace(/\D/g, '');
            newForm[id] = cleanedPhoneNumber;
        }else{
            newForm[id] = value;
        }
        newForm.disabled = validate(newForm);

        setForm(() => {return newForm})
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
                guests: 0,
                occasion: '',
                disabled: true
            });
            navigate("/confirmed");
        }
    };

    useEffect(()=>{
        const getDate = new Date(form['res-date']);
        const result = fetchAPI(getDate);
        result.unshift('')
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
                        autoComplete='off'
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
                        autoComplete='off'
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
                        className={`inputData ${form.phone.length < 7 ? 'invalid' : ''}`}
                        type="tel"
                        autoComplete='off'
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
                        autoComplete='off'
                        id="res-date"
                        required={true}
                        value={form["res-date"]}
                        onChange={(e) => fieldChange(e)}
                    />
                </div>
                <div className='container-select'>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time"
                        required={true}
                        value={form["res-time"]}
                        onChange={(e) => fieldChange(e)}>
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
                        autoComplete='off'
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
                        <option></option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <i></i>
                </div>
                <button aria-label="On Click" type='submit' disabled={form.disabled}>Submit</button>
            </form>
        </section>
    )
}
