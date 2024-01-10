import React from "react";
import {
    VTV1,
    ictNews,
    vnExpress,
    BoYTe,
    InfoNet,
    Dantri,
    vtcNews,
} from "../../../assets/images";

const MediaSection = () => {
    return (
        <div className="w-full flex flex-col bg-bgMedia bg-repeat bg-cover bg-center px-10 my-6">
            <h2 className="text-3xl text-headingColor font-semibold text-center py-10">
                Truyền thông nói về BookingCare
            </h2>
            <div className="grid grid-cols-2 gap-x-10 mb-12">
                <div className="w-full">
                    <iframe
                        width="100%"
                        height="332"
                        src="https://www.youtube.com/embed/FyDQljKtWnI?si=Tg9WmGy0VQon1CBi"
                        title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className="rounded-2xl"
                    ></iframe>
                </div>
                <div className="w-full grid grid-cols-2 gap-6">
                    <a
                        href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={VTV1} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://vietnamnet.vn/thong-tin-truyen-thong"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={ictNews} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={vnExpress} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={vtcNews} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://moh.gov.vn/"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={BoYTe} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://infonet.vietnamnet.vn/da-co-hon-20000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={InfoNet} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={VTV1} alt="" className="h-39" />
                        </div>
                    </a>
                    <a
                        href="https://dantri.com.vn/nhan-tai-dat-viet/san-pham-nen-tang-dat-kham-booking-care-201908201625624751.htm"
                        className="h-full flex items-center justify-center rounded-xl bg-white cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center">
                            <img src={Dantri} alt="" className="h-39" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
