import BookingForm from '../components/BookingForm';

const BookingPage = ({ availableTimes, submitForm, dispatch }) => {
    return (
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} dispatch={dispatch} />
    );
};

export default BookingPage;