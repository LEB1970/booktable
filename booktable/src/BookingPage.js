import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes})=>{
    return(
        <>
        <h1>Booking Page</h1>
        <BookingForm availableTimes={availableTimes} />
        </>
    );
};
export default BookingPage;