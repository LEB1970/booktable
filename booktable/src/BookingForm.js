import { useState } from "react";


const BookingForm = ({availableTimes})=>{

const [date, setDate]=useState([]);
const [time, setTime]=useState([]);
const [guest, setGuest]=useState([]);
const [occasion, setOccasion]=useState([]);

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('date',date);
    console.log('time',time);
    console.log('guest',guest);
    console.log('occasion',occasion);}

    return(
      <form  className="d-grid col-3 m-auto" onSubmit={handleSubmit}>
            <label htmlFor ="res-date">Choose date</label>
            <input type="date" className="mb-3" id="res-date"  value={date} onChange={(e)=>setDate(e.target.value)}/>
            <label htmlFor ="res-time">Choose time</label>
            <select id="time " name="time" className="mb-3"  onChange={(e)=>setTime(e.target.value)} >
                {availableTimes.map((opt)=> <option key={opt.id}>{opt.time}</option>)}                
            </select>
            <label htmlFor ="guests">Number of guests</label>
            <input type="number" className="mb-3" placeholder="1" min="1" max="10" id="guests" value={guest}  onChange={(e)=>setGuest(e.target.value)}/>
            <label htmlFor ="occasion">Occasion</label>
            <select id="occasion" className="mb-5"  onChange={(e)=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" className="btn btn-primary" value="Make Your reservation"/>
        </form>
        
    );
};
export default BookingForm;