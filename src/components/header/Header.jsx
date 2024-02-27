import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Time, Support } from "../../assets/images";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Logo } from "../../assets/images";

const Header = () => {
    const location = useLocation();
    return (
        <header className="w-full h-78 backdrop-blur-md flex items-center justify-between bg-primary">
            <div className="w-full flex flex-row items-center justify-between px-8">
                <div className="flex flex-row flex-none justify-center items-center">
                    <span className="w-50 h-50 flex items-center justify-center cursor-pointer">
                        <FaBars className="text-4xl text-textBar" />
                    </span>
                    <Link to={"/"}>
                        <img
                            src={Logo}
                            alt=""
                            className="w-200 cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    {location.pathname === "/" ? (
                        <div className="flex flex-row justify-end w-full me-6">
                            <div className="w-275 h-12 flex flex-row items-center bg-white cursor-pointer justify-start border border-solid border-textBorder rounded-full">
                                <span className="px-4">
                                    <BsSearch className="text-base" />
                                </span>
                                <span className="text-sm text-textPlaceholder">
                                    Tìm bệnh viện
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-row items-center justify-center ms-12 gap-x-8">
                            <Link to={"/services/specialities"}>
                                <div className="flex flex-col">
                                    <p className="text-xs text-textColor font-bold">Chuyên khoa</p>
                                    <p className="text-10px text-textColor font-normal">Tìm bác sĩ theo chuyên khoa</p>
                                </div>
                            </Link>
                            <Link to={"/clinics"}>
                                <div className="flex flex-col">
                                    <p className="text-xs text-textColor font-bold">Cơ sở y tế</p>
                                    <p className="text-10px text-textColor font-normal">Chọn bệnh viện phòng khám</p>
                                </div>
                            </Link>
                            <Link>
                                <div className="flex flex-col">
                                    <p className="text-xs text-textColor font-bold">Bác sĩ</p>
                                    <p className="text-10px text-textColor font-normal">Chọn bác sĩ giỏi</p>
                                </div>
                            </Link>
                            <Link>
                                <div className="flex flex-col">
                                    <p className="text-xs text-textColor font-bold">Gói khám</p>
                                    <p className="text-10px text-textColor font-normal">Khám sức khoẻ tổng quát</p>
                                </div>
                            </Link>
                        </div>
                    )}
                    <div className="flex flex-row flex-none justify-end items-center gap-x-8">
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={Time} alt="" className="w-26 h-26" />
                            <span className="text-sm text-textPrimary font-semibold leading-6">
                                Lịch hẹn
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={Support} alt="" className="w-26 h-26" />
                            <span className="text-sm text-textPrimary font-semibold leading-6">
                                Hỗ trợ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
