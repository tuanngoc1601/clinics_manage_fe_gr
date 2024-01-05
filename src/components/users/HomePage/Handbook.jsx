import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { handbooks } from "../../../utils/handbook";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DetailButton from "../../../containers/DetailButton";

const Handbook = () => {
    return (
        <div className="w-full flex flex-col px-10 my-6">
            <div className="w-full flex flex-row items-center justify-between">
                <h3 className="text-2xl font-semibold text-start text-headingColor">
                    Cẩm nang
                </h3>
                <DetailButton />
            </div>
            <HandbookSwiper />
        </div>
    );
};

const HandbookSwiper = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between my-6">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                {handbooks.map((handbook, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex flex-col cursor-pointer">
                            <img
                                src={handbook.image}
                                alt=""
                                className="w-full block object-cover border rounded-lg"
                            />
                            <p className="text-start text-base text-headingColor font-semibold mt-4 mb-3">
                                {handbook.title}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Handbook;
