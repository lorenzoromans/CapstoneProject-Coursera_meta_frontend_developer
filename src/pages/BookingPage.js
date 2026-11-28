import BookingForm from '../components/BookingForm';
import restaurant from "../assets/restaurant.jpg";

const BookingPage = ({ availableTimes, submitForm, dispatch }) => {
    return (
        <>
        <div className="banner">
            <div className="banner-text">
                <h1>Little Lemon</h1>
                <h2>Reserve a table page</h2>
                <p className="banner-desc">
                    You can make a reservation at Little Lemon by filling out the form below. Please select your preferred date, time, number of guests, and occasion. We look forward to serving you!
                </p>
            </div>
            <img
                className="banner-image"
                src={restaurant}
                alt="Our restaurant Little Lemon with tables and chairs set up for dining"
            />
        </div>
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatch={dispatch} />
        </>
    );
};

export default BookingPage;