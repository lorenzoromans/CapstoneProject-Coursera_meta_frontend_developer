import { Routes, Route } from "react-router-dom";
import HomePage from "./../pages/Homepage";
import BookingPage from "./../pages/BookingPage";
import BookingConfirmedPage from "./../pages/BookingConfirmedPage";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./Api";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    function updateTimes(state, date) { 
        return {availableTimes: fetchAPI(new Date(date))}

    }

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirm-booking");
        }
    }

    return (
        <Routes> 
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} submitForm={submitForm} dispatch={dispatch} />}/>
            <Route path="/confirm-booking" element={<BookingConfirmedPage />}/>
        </Routes>
    );
};

export default Main;