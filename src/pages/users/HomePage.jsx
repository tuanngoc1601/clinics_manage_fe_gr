import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clinicRequestApi, specialityRequestApi } from "../../redux/requests";
import Header from "../../components/header/Header";
import Slider from "../../components/users/Slider";
import ServiceSection from "../../components/users/HomePage/ServiceSection";
import SpecialitiesList from "../../components/users/HomePage/SpecialitiesList";
import HealthFacilities from "../../components/users/HomePage/HealthFacilities";
import OutstandingDoctor from "../../components/users/HomePage/OutstandingDoctor";
import TelehealthSection from "../../components/users/HomePage/TelehealthSection";
import MentalHealth from "../../components/users/HomePage/MentalHealth";
import QuestionAnswer from "../../components/users/HomePage/QuestionAnswer";
import Handbook from "../../components/users/HomePage/Handbook";
import MediaSection from "../../components/users/HomePage/MediaSection";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        specialityRequestApi.getAllSpecialities(dispatch);
        clinicRequestApi.getAllClinics(dispatch);
    }, []);

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <Header />
            <Slider />
            <ServiceSection />
            <SpecialitiesList />
            <HealthFacilities />
            <OutstandingDoctor />
            <TelehealthSection />
            <MentalHealth />
            <QuestionAnswer />
            <Handbook />
            <MediaSection />
            <Footer />
        </main>
    );
};

export default HomePage;
