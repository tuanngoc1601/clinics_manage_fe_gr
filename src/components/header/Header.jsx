import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Time, Support } from "../../assets/images";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Logo } from "../../assets/images";

const Header = () => {
    return (
        <header className="w-full h-78 backdrop-blur-md flex items-center justify-between bg-primary shadow-sm">
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
                <div className="w-full flex flex-row justify-between items-center ">
                    <div className="flex flex-row gap-x-2">
                        <ul className="flex flex-row gap-x-8 px-10">
                            <li className="flex items-center justify-center text-lg text-textNav">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Tại nhà
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-center text-lg text-textNav">
                                <NavLink
                                    to="/cong-ty"
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Tại viện
                                </NavLink>
                            </li>
                            <li className="flex items-center justify-center text-lg text-textNav">
                                <NavLink
                                    to="/thuc-tap"
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Sống khoẻ
                                </NavLink>
                            </li>
                        </ul>
                        <div className="w-275 h-12 flex flex-row items-center bg-white cursor-pointer justify-start border border-solid border-textBorder rounded-full">
                            <span className="px-4">
                                <BsSearch className="text-base" />
                            </span>
                            <span className="text-sm text-textPlaceholder">
                                Tìm bệnh viện
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-center gap-x-8">
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={Time} alt="" className="w-26 h-26" />
                            <span className="text-sm text-textPrimary font-semibold leading-6">Lịch hẹn</span>
                        </div>
                        <div className="flex flex-col justify-center items-center cursor-pointer">
                            <img src={Support} alt="" className="w-26 h-26" />
                            <span className="text-sm text-textPrimary font-semibold leading-6">Hỗ trợ</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
