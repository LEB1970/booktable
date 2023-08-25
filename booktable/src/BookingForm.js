import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import AvailableTimes from './AvailableTimes'
import Occasion from './Occasion'

const BookingForm = ({availableTime,availableTimeDispatch,submitForm})=>{    
    const [resDate,setDate]=useState("");
    const [resTime,setTime]=useState("");
    const [resGuest,setGuest]=useState("");
    const [resOccasion,setOccasion]=useState("");   

    const handleSubmit = (e)=>{
       debugger;
    e.preventDefault();
        console.log('formik',formik)
        console.log('Form Submitted');
        console.log('resDate',resDate);
        console.log('resTime',resTime);
        console.log('resGuest',resGuest);
        console.log('resOccasion',resOccasion);   
        formik.handleSubmit(e);
    };

    const handleDate = (e)=>{
        console.log('handleDate',e);
        console.log(e.target.value)
        setDate(e.target.value);  
        formik.handleChange(e);              
        const date = new Date(e.target.value);       
        availableTimeDispatch({type:'date', payload:date});
    };
    const handleDateBlur = (e)=>{
        console.log('handleDateBlur',e.target.value); 
        formik.handleBlur(e);
    };
    const handleTime = (e)=>{
        console.log('handleTime',e); 
        setTime(e.target.value)
        formik.handleChange(e);
    };
    const handleTimeBlur = (e)=>{
        console.log('handleTimeBlur e.target.value',e.target.value); 
        formik.handleBlur(e);
    };
    const handleGuest = (e)=>{
        console.log('handleGuest',e); 
        setGuest(e.target.value);
        formik.handleChange(e);
    };
    const handleGuestBlur = (e)=>{
        console.log('handleGuestBlur',e); 
        formik.handleBlur(e);
    };
     const handleOccasion = (e)=>{       
       setOccasion(e.target.value)
       formik.handleChange(e);
    };

    const isTrue = true;
    const formik = useFormik({
        initialValues:{
            resdate:'',
            restime:'',
            guests:'',
            occasion:''
        },
        onSubmit: (values) =>{
            console.log('onSubmit Inside Formik:',values);
            const formData = {resDate:resDate, resTime:resTime, resGuest:resGuest,resOccasion};
            submitForm(formData);
        },      

         validate: (values)=>{
            const errors={}
            if(!values.resdate){
                console.log('!values.resdate:', values.resdate)
                errors.resdate = 'Select a date by clicking the calender icon.'
            }
            if(values.guests < 2 ){ 
                console.log('values.guests.value ! >1:',values.guests)              
                errors.guests = 'It is required to have two or more guest to reserve a table.'
            }           
            if(!values.restime){                
                console.log('!values.restime false:', values.restime)
                errors.restime = 'Please select an available time from the drop down.'
            }   
            if(values.restime && (/^\d{2}\:\d{2}$/).test(values.restime) === false){ 
                errors.restime = 'Please select an available time from the drop down.'
            }  

            console.log('errors',errors)
            return errors;
        }
    });

    return ( 
        <>        
        <form  className="mb-3 booking-form" onSubmit={handleSubmit} >  
        <h1>Book Now</h1>
            <img src='./images/Resveration2.png' alt="book now image"  className='' width="100%" height="" />  
           <div className="mb-3"><h2>To book a reservation, please fill out this form.</h2></div> 
            <div className="form-group mb-2">
                <label htmlFor="res-date" className="fw-bold">Choose date</label>               
                <input  id="res-date" aria-label="Choose date" name="resdate" type="date" role="date" className="form-control" value={resDate} onChange={handleDate} onBlur={handleDateBlur}   />
                <div  title='warning' className="error d-flex align-items-center mb-2">
                    <div style={{display: formik.touched.resdate  && formik.errors.resdate  ? 'inline-flex' : 'none' }} className='me-2 '>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle " viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>
                    {formik.touched.resdate  && formik.errors.resdate}
                </div>                
            </div>      
            <div className="form-group mb-2"> 
                <AvailableTimes aria-label="Choose time" name="restime" availableTime={availableTime}  TimeValueOnChange={handleTime} onBlur={handleTimeBlur}/> 
                <div  title='warning' className="error d-flex align-items-center  mb-2">
                    <div  style={{display: formik.touched.restime  && formik.errors.restime  ? 'inline-flex' : 'none' }} className='me-2 '>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle " viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>
                    { formik.touched.restime && formik.errors.restime}
                </div>
            </div>
            <div  title='warning' className="form-group mb-2">
                <label htmlFor="guests" className="fw-bold">Number of guests</label>               
                <input id="guests" name="guests" aria-label="Select number of guest" type="number" className="form-control" placeholder="0"  min="1" max="10" value={resGuest} onChange={handleGuest} onBlur={handleGuestBlur}/>
                <div className="error d-flex align-items-center  mb-2">
                    <div style={{display: formik.touched.guests  && formik.errors.guests  ? 'inline-flex' : 'none' }} className='me-2 '>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle " viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>
                    {formik.touched.guests && formik.errors.guests}
                </div>
            </div>
            <div className="form-group mb-2">               
                <Occasion name="occasion" aria-label="Select occasion" value = {resOccasion}  onChange={handleOccasion} />
            </div>   
            <div className="d-flex justify-content-between mt-3" >
                <button type="submit" role="button"  className="btn btn-primary">Make Your reservation</button>           
                <div>
                    <Link to="/">
                        <button className="btn btn-primary">Cancel</button>
                    </Link>
                </div>
            </div>
        </form>        
        </>
    );
};  
export default BookingForm;
