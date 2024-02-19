import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Slider1, Slider2, Slider3 } from "../../assets/images";

const Slider = () => {
    return (
        <div className="w-full h-390 bg-primary">
            <div className="w-full h-full flex flex-row items-center justify-between px-10 my-10">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full h-full"
                >
                    <SwiperSlide>
                        <div className="w-full h-full rounded-lg">
                            <img
                                src={Slider1}
                                alt=""
                                className="w-full h-full block object-cover rounded-3xl"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full rounded-lg">
                            <img
                                src={Slider2}
                                alt=""
                                className="w-full h-full block object-cover rounded-3xl"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-full rounded-lg">
                            <img
                                src={Slider3}
                                alt=""
                                className="w-full h-full block object-cover rounded-3xl"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
