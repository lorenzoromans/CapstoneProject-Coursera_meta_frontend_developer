import { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, submitForm, dispatch }) => {

    const [bDate, setBDate] = useState(new Date().toISOString().split("T")[0]);
    const [bTime, setBTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [disableSubmit, setDisableSubmit] = useState(true);

    function onChangeDate(newDate) {
        setBDate(newDate);
        dispatch(newDate);
    }

    const clearForm = () => { 
        setBDate("");
        setBTime("");
        setGuests("");
        setOccasion("");
        setDisableSubmit(true);
    }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log("Booking details:", { bDate, bTime, guests, occasion });
        submitForm({ bDate, bTime, guests, occasion });
        clearForm(); 
    }; 

    useEffect(() => {
        if (bDate && bTime && guests && occasion) {
            setDisableSubmit(false);
        } else {
            setDisableSubmit(true);
        }
    }, [bDate, bTime, guests, occasion]);

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            {disableSubmit && (
                <div className="booking-validation-status" role="status">
                    <p>To make the reservation, fill all the missing form fields:</p>
                    <ul>
                        {!bDate && <li>Date</li>}
                        {!bTime && <li>Time</li>}
                        {!guests && <li>Number of guests</li>}
                        {!occasion && <li>Occasion</li>}
                    </ul>
                </div>
            )}
            <fieldset>
                <div className="field">
                    <label htmlFor="date">Choose date</label>
                    <input type="date" id="date" name="date" value={bDate} onChange={(e) => onChangeDate(e.target.value)} required aria-label="Choose date" />
                    {!bDate && <span id="date-error" className="field-error">This field is required</span>}
                </div>
                <div className="field">
                    <label htmlFor="time">Choose time</label>
                    <select id="time" name="time" value={bTime} onChange={(e) => setBTime(e.target.value)} required aria-label="Choose time">
                        <option value="" disabled>Select a time</option>
                        {availableTimes.availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                    {!bTime && <span id="time-error" className="field-error">This field is required</span>}
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" required aria-label="Number of guests" />
                    {!guests && <span id="guests-error" className="field-error">This field is required</span>}
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-label="Occasion">
                        <option value="" disabled>Select an occasion</option>
                        <option value="Other occasion">Other occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    {!occasion && <span id="occasion-error" className="field-error">This field is required</span>}
                </div>
                <button type="submit" disabled={disableSubmit}>
                    Make Your reservation
                </button>
            </fieldset>
        </form>
    );
};

export default BookingForm;