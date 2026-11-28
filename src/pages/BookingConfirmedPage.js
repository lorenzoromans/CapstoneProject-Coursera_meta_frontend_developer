import { Link } from "react-router-dom";
import marioAdrian from "../assets/marioAdrian.jpg";

const BookingConfirmedPage = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Little Lemon</h1>
                <h2>Booking confirmed!</h2>
                <p className="banner-desc">
                    Thank you for your reservation at Little Lemon. We look forward to serving you!
                </p>
                <Link to="/"><button className="booking-confirmed-button">Go back to Homepage</button></Link>
            </div>
            <img
                className="banner-image"
                src={marioAdrian}
                alt="Our chefs Mario and Adrian preparing a dish at Little Lemon restaurant"
            />
        </div>
    );
}

export default BookingConfirmedPage;