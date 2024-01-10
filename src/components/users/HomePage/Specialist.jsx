import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { specialists } from "../../../utils/specialist";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DetailButton from "../../../containers/DetailButton";

const Specialist = () => {
    return (
        <div className="w-full flex flex-col px-10 mt-20">
            <div className="w-full flex flex-row items-center justify-between">
                <h3 className="text-2xl font-semibold text-start text-headingColor">
                    Chuyên khoa
                </h3>
                <Link to={"/services/specialists"}>
                    <DetailButton />
                </Link>
            </div>
            <SpecialistFields />
        </div>
    );
};

const SpecialistFields = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between my-6">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {specialists.map((specialist, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex flex-col rounded-2xl border-2 border-boderItem cursor-pointer p-4">
                            <img
                                src={specialist.image}
                                alt=""
                                className="w-full h-217 block object-cover rounded-3xl"
                            />
                            <p className="text-center text-lg text-headingColor font-semibold mt-8 mb-3">
                                {specialist.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Specialist;
