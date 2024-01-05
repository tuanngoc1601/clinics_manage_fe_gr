import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { facilities } from "../../../utils/facilities";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DetailButton from "../../../containers/DetailButton";

const HealthFacilities = () => {
    return (
        <div className="w-full flex flex-col px-10 mt-20">
            <div className="w-full flex flex-row items-center justify-between">
                <h3 className="text-2xl font-semibold text-start text-headingColor">
                    Cơ sở y tế
                </h3>
                <DetailButton />
            </div>
            <FacilitiesSwiper />
        </div>
    );
};

const FacilitiesSwiper = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between my-6">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {facilities.map((facility, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex flex-col rounded-2xl border-2 border-boderItem cursor-pointer p-4">
                            <img
                                src={facility.image}
                                alt=""
                                className="w-full h-158 block object-contain rounded-3xl"
                            />
                            <div className="h-16 flex items-center text-center justify-center text-lg text-headingColor font-semibold mt-5 mb-4">
                                {facility.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HealthFacilities;
