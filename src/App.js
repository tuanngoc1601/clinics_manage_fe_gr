import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/users/HomePage";
import SpecialistPage from "./pages/users/SpecialistPage";
import ClinicsPage from "./pages/users/ClinicsPage";
import SpecialistDetail from "./pages/users/SpecialistDetail";
import Booking from "./pages/users/Booking";

function App() {
    return (
        <div className="w-full min-h-screen h-auto flex flex-col items-center justify-center">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route exact path="/" element={<HomePage />} />
                <Route
                    path="/services/specialities"
                    element={<SpecialistPage />}
                />
                <Route path="/clinics" element={<ClinicsPage />} />
                <Route
                    path="/services/specialities/:specialityId"
                    element={<SpecialistDetail />}
                />
                <Route path="/bookings/:bookingId" element={<Booking />} />
            </Routes>
        </div>
    );
}

export default App;
