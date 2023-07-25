import BookingForm from "./BookingForm";

const BookingPage = ({availableTime,availableTimeDispatch,submitForm})=>{
    return(
        <>
        {/* <h1>Booking Page</h1> */}
        {/* <BookingForm availableTimes={availableTime} /> */}
        <BookingForm availableTime={availableTime} availableTimeDispatch={availableTimeDispatch} submitForm={submitForm} />
        </>
    );
};
export default BookingPage;