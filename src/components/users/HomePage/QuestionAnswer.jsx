import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { QA } from "../../../assets/images";

const QuestionAnswer = () => {
    return (
        <div className="w-full flex flex-col px-10 my-6">
            <div className="w-full flex flex-row items-center justify-between">
                <h3 className="text-2xl font-semibold text-start text-headingColor">
                    Bác sĩ hỏi đáp
                </h3>
            </div>
            <QuestionSwiper />
        </div>
    );
};

const QuestionSwiper = () => {
    return (
        <div className="w-full flex flex-row items-center justify-between my-6">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <div className="w-full h-full flex flex-col bg-white rounded-2xl border-2 border-boderItem cursor-pointer p-4">
                        <img
                            src={QA}
                            alt=""
                            className="w-full h-217 block object-cover rounded-3xl"
                        />
                        <p className="text-center text-lg text-headingColor font-semibold mt-8 mb-3">
                            Hỏi đáp cộng đồng
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default QuestionAnswer;
