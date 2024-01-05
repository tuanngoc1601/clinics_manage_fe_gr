import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { doctors } from "../../../utils/doctors";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DetailButton from "../../../containers/DetailButton";

const OutstandingDoctor = () => {
    return (
        <div className="w-full bg-bgSection bg-center bg-repeat bg-cover my-6">
            <div className="w-full flex flex-col px-10 mt-20">
                <div className="w-full flex flex-row items-center justify-between">
                    <h3 className="text-2xl font-semibold text-start text-headingColor">
                        Bác sĩ nổi bật
                    </h3>
                    <DetailButton />
                </div>
                <DoctorSwiper />
            </div>
        </div>
    );
};

const DoctorSwiper = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between my-6">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {doctors.map((doctor, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex flex-col rounded-2xl cursor-pointer p-4">
                            <div className="flex justify-center items-center">
                                <img
                                    src={doctor.image}
                                    alt=""
                                    className="w-220 h-220 block object-cover rounded-full"
                                />
                            </div>
                            <div className="mb-4">
                                <p className="flex items-center text-center text-lg text-textNameDoctor font-semibold mt-4 mb-3">
                                    {doctor.name}
                                </p>
                                <p className="text-center text-base text-textDesc font-normal mb-3">
                                    {doctor.specialist}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OutstandingDoctor;
