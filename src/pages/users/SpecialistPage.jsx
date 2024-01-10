import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { IoMdHome } from "react-icons/io";
import { specialists } from "../../utils/specialist";

const SpecialistPage = () => {
    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <Header />
            <div className="w-full px-10 divide-y">
                <div className="flex items-center justify-start gap-x-2 my-4 px-2">
                    <Link to={"/"}>
                        <IoMdHome className="text-textPrimary text-xl" />
                    </Link>
                    <span className="text-textPrimary">/</span>
                    <span className="text-sm">Khám Chuyên khoa</span>
                </div>
                <div className="grid grid-cols-4 px-4 py-6 gap-x-9 gap-y-6">
                    {specialists &&
                        specialists.length > 0 &&
                        specialists.map((specialist, index) => (
                            <Link to={"/services/specialists/1"}>
                                <div
                                    key={index}
                                    className="flex flex-col cursor-pointer"
                                >
                                    <img
                                        src={specialist.image}
                                        alt=""
                                        className="w-full h-36"
                                    />
                                    <p className="text-base text-black font-semibold pt-2">
                                        {specialist.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    );
};

export default SpecialistPage;
