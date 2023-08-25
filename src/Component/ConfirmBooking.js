import {useLocation} from "react-router-dom"

const ConfirmBooking = ()=>{
    const location = useLocation()
    return(
        <section className='confirm' tabIndex={0} >
        <img src='./images/ConfirmedBooking.png' alt="Reservation"  className='' width="" height="" />       
        <div className='header-text'>
        </div> 
        <div className='' >
            <ul className='confirm-list'>
                <li><label>Date:</label> {location.state.data.resDate}</li>
                <li><label>Time:</label> {location.state.data.resTime}</li>                        
                <li><label>Occasion:</label> {location.state.data.resOccasion}</li>
                <li><label>Number of Guests:</label> {location.state.data.resGuest}</li>         
            </ul>           
        </div>
    </section>
    );
};
export default ConfirmBooking;