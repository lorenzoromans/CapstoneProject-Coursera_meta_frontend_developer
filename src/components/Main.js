import { Routes, Route } from "react-router-dom";
import HomePage from "./../pages/Homepage";

const Main = () => {
    return (
        <Routes> 
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    );
};

export default Main;