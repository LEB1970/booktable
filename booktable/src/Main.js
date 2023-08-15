
import HomePage from './HomePage';
import Menu from './Menu';
import BookingPage from './BookingPage';
import About from './About';
import OrderOnline from './OrderOnline';
import Login from './Login';
import ConfirmBooking from './ConfirmBooking';

import { Routes, Route, useNavigate} from 'react-router-dom';
// import Specials from './Specials';
import {fetchAPI, submitAPI}  from './ApiData'
import {useReducer} from "react"

let initializeTimesState;
let navigate;

const updateTimesReducer = (state, action)=>{  
    //Update State from dispatch call.
   console.log(state,action)
    const date = action.type == 'date' ? action.payload : state; 
    const times =  availableDates(date);
  
    return times.map((option, index)=>{
      return {id:index , value:option};   
    });
}

const availableDates = (avialableDays)=>{
    const date = avialableDays ? avialableDays : new Date(); 
 
    let  availabletime =fetchAPI(date);
    let availabletimeArr =[...availabletime];
    availabletimeArr.unshift("-- Select a time --"); 
  
    return  availabletimeArr;
}

const initializeTimes = ()=>{ 
    // Create the initial state for the availableTimes. 
     initializeTimesState = availableDates().map((option, index)=>{
      return {id:index , value:option};   
    });     
    return initializeTimesState;
}

const submitForm =(formData)=>{ 
    debugger
    const isTrue = submitAPI(formData);
    if(isTrue){
      navigate ("/confirm", { state: { data: formData } });
    }
};

const Main = ()=>{
    // debugger
navigate = useNavigate();
const [availableTimeState,availableTimeDispatch] = useReducer(updateTimesReducer,initializeTimes());
    return(
        <>
            <section></section>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                {/* <Route path="/booking-Page" element={<BookingPage availableTimes={availableTimes}/>}/> */}
                <Route path="/booking-Page" element={<BookingPage availableTime={availableTimeState} availableTimeDispatch={availableTimeDispatch} submitForm={submitForm} />}/> 
                <Route path="/about" element={<About/>}/>
                <Route path="/order-online" element={<OrderOnline/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm" element={<ConfirmBooking/>}/>
                {/* <Route path="/specials" element={<Specials/>}/> */}
            </Routes>
        </>
    )
};
export  {Main, updateTimesReducer, initializeTimes};