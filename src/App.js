import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/users/HomePage";
import SpecialistPage from "./pages/users/SpecialistPage";
import ClinicsPage from "./pages/users/ClinicsPage";
import ClinicDetail from "./pages/users/ClinicDetail";
import SpecialistDetail from "./pages/users/SpecialistDetail";
import Booking from "./pages/users/Booking";
import Header from "./components/header/Header";
import DoctorDetail from "./pages/users/DoctorDetail";

function App() {
    return (
        <div className="w-full min-h-screen h-auto flex flex-col items-center justify-center">
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route exact path="/" element={<HomePage />} />
                <Route
                    path="/services/specialities"
                    element={<SpecialistPage />}
                />
                <Route exact path="/clinics" element={<ClinicsPage />} />
                <Route path="/clinics/:clinicId" element={<ClinicDetail />} />
                <Route
                    path="/services/specialities/:specialityId"
                    element={<SpecialistDetail />}
                />
                <Route path="/doctors/:doctorId" element={<DoctorDetail />} />
                <Route path="/bookings/:schedule_id" element={<Booking />} />
            </Routes>
        </div>
    );
}

export default App;
