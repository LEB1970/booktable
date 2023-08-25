import BookingForm from "./BookingForm";

const BookingPage = ({availableTime,availableTimeDispatch,submitForm})=>{
    return(
        <>     
        <BookingForm availableTime={availableTime} availableTimeDispatch={availableTimeDispatch} submitForm={submitForm} />
        </>
    );
};
export default BookingPage;