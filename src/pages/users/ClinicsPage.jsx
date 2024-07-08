import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clinicRequestApi } from "../../redux/requests";
import Footer from "../../components/footer/Footer";
import ClinicsSectionKey from "../../components/users/clinics/ClinicsSectionKey";
import { IoMdHome } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const ClinicsPage = () => {
    const keyWords = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "#",
    ];
    const dispatch = useDispatch();
    const listClinics = useSelector((state) => state.clinic.clinics.data);

    useEffect(() => {
        clinicRequestApi.getAllClinics(dispatch);
    }, []);

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <div className="w-full px-10">
                <div className="flex items-center justify-start gap-x-2 my-4 px-2">
                    <Link to={"/"}>
                        <IoMdHome className="text-textPrimary text-xl" />
                    </Link>
                    <span className="text-textPrimary">/</span>
                    <span className="text-sm">Tất cả Cơ sở y tế</span>
                </div>
                <div className="w-full px-2 divide-y-2">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-semibold">Cơ sở y tế</p>
                        <div className="w-360 flex items-center border rounded-full bg-bgInputSearch px-4">
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="w-full outline-none border-0 bg-transparent px-2 py-2"
                            />
                            <BsSearch className="flex-none text-xl cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <div className="w-full flex flex-col gap-2">
                            {listClinics &&
                                listClinics.length > 0 &&
                                keyWords.map((key, index) => {
                                    const clinicByKeys = listClinics.filter(
                                        (clinic) => clinic.keyWord === key
                                    );
                                    if (clinicByKeys.length === 0) return null;
                                    return (
                                        <ClinicsSectionKey
                                            key={index}
                                            keyWord={key}
                                            clinicsArr={clinicByKeys}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ClinicsPage;
