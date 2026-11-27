import { useState } from "react";

const BookingForm = ({ availableTimes, submitForm, dispatch }) => {

    const [bDate, setBDate] = useState(new Date().toISOString().split("T")[0]);
    const [bTime, setBTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    function onChangeDate(newDate) {
        setBDate(newDate);
        dispatch(newDate);
    }

    const clearForm = () => { 
        setBDate("");
        setBTime("");
        setGuests("");
        setOccasion("");
    }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log("Booking details:", { bDate, bTime, guests, occasion });
        submitForm({ bDate, bTime, guests, occasion });
        clearForm(); 
    }; 

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" name="res-date" value={bDate} onChange={(e) => onChangeDate(e.target.value)} required aria-label="Choose date" />
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" name="res-time" value={bTime} onChange={(e) => setBTime(e.target.value)} required aria-label="Choose time">
                        {availableTimes.availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" required aria-label="Number of guests" />
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required aria-label="Occasion">
                        <option value="">Other occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <button type="submit">Make Your reservation</button>
            </fieldset>
        </form>
    );
};

export default BookingForm;