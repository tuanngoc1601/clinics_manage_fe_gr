import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { mentalHealth } from "../../../utils/mentalHealth";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MentalHealth = () => {
    return (
        <div className="w-full flex flex-col bg-bgMentalHealth bg-center bg-repeat bg-cover px-10 py-12 my-6">
            <div className="w-full flex flex-row items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-start text-headingColor">
                    Sức khoẻ tinh thần
                </h3>
            </div>
            <MentalHealthSwiper />
        </div>
    );
};

const MentalHealthSwiper = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between my-6">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {mentalHealth.map((mental, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex flex-col bg-white rounded-2xl border-2 border-boderItem cursor-pointer p-4">
                            <img
                                src={mental.image}
                                alt=""
                                className="w-full h-217 block object-cover rounded-3xl"
                            />
                            <p className="text-center text-lg text-headingColor font-semibold mt-8 mb-3">
                                {mental.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MentalHealth;
