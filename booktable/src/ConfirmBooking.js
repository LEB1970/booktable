import {useLocation,useNavigate} from "react-router-dom"

const ConfirmBooking = ()=>{
    let navigate = useNavigate();

    const location = useLocation()
    console.log(location) 

    return(
        <section className='confirm' tabIndex={0} >
        <img src='./images/ConfirmedBooking.png' alt="Reservation image"  className='' width="" height="" />
       
        <div className='header-text'>
            {/* <div> Your booking has been confirmed.</div>    */}
            {/* <div> Your reservation information:</div> */}
        </div> 
        <div className='' >
            <ul className='confirm-list'>
                <li><label>Date:</label> {location.state.data.resDate}</li>
                <li><label>Time:</label> {location.state.data.resTime}</li>                        
                <li><label>Occasion:</label> {location.state.data.resOccasion}</li>
                <li><label>Number of Guests:</label> {location.state.data.resGuest}</li>
         
            </ul>
           
        </div>
        {/* <button onClick={() => navigate(-1)}>Back</button>  */}
    </section>
    );
};
export default ConfirmBooking;