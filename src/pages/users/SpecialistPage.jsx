import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { specialityRequestApi } from "../../redux/requests";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IoMdHome } from "react-icons/io";

const SpecialistPage = () => {
    const specialities = useSelector((state) => state.speciality.specialities.data);
    const dispatch = useDispatch();

    useEffect(() => {
        specialityRequestApi.getAllSpecialities(dispatch);
    }, []);

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
                    {specialities &&
                        specialities.length > 0 &&
                        specialities.map((speciality, index) => (
                            <Link to={"/services/specialities/1"}>
                                <div
                                    key={index}
                                    className="flex flex-col cursor-pointer"
                                >
                                    <img
                                        src={speciality.image}
                                        alt=""
                                        className="w-full h-36"
                                    />
                                    <p className="text-base text-black font-semibold pt-2">
                                        {speciality.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default SpecialistPage;
