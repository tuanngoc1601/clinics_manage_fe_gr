import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/users/HomePage";

function App() {
    return (
        <div className="w-full min-h-screen h-auto flex flex-col items-center justify-center">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
