import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/users/Slider";
import ServiceSection from "../../components/users/HomePage/ServiceSection";
import Specialist from "../../components/users/HomePage/Specialist";
import HealthFacilities from "../../components/users/HomePage/HealthFacilities";
import OutstandingDoctor from "../../components/users/HomePage/OutstandingDoctor";
import TelehealthSection from "../../components/users/HomePage/TelehealthSection";
import MentalHealth from "../../components/users/HomePage/MentalHealth";
import QuestionAnswer from "../../components/users/HomePage/QuestionAnswer";
import Handbook from "../../components/users/HomePage/Handbook";
import MediaSection from "../../components/users/HomePage/MediaSection";

const HomePage = () => {
    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <Header />
            <Slider />
            <ServiceSection />
            <Specialist />
            <HealthFacilities />
            <OutstandingDoctor />
            <TelehealthSection />
            <MentalHealth />
            <QuestionAnswer />
            <Handbook />
            <MediaSection />
        </main>
    );
};

export default HomePage;
