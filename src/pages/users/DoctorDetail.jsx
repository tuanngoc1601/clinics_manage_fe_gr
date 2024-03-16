import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doctorService } from "../../services";
import Footer from "../../components/footer/Footer";
import ScheduleSection from "../../components/users/doctors/ScheduleSection";
import { IoMdHome } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import ReactMakedown from "../../containers/ReactMakedown";

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctorDetail, setDoctorDetail] = useState();

    useEffect(() => {
        const getDoctorDetail = async () => {
            try {
                const res = await doctorService.handleGetDoctorDetailService(
                    doctorId
                );
                setDoctorDetail(res.data.data);
            } catch (err) {
                console.error("Failed fetching doctor detail", err);
            }
        };

        getDoctorDetail();
    }, []);

    console.log(doctorDetail);

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <div className="w-full flex flex-col px-10">
                <div className="flex items-center justify-start gap-x-2 my-4 px-2">
                    <Link to={"/"}>
                        <IoMdHome className="text-textPrimary text-xl" />
                    </Link>
                    <span className="text-textPrimary">/</span>
                    <Link to={"/services/specialities"}>
                        <span className="text-sm text-textPrimary">
                            Khám Chuyên khoa
                        </span>
                    </Link>
                </div>
                <div className="flex flex-row items-start text-13px justify-start gap-x-4">
                    <img
                        src={doctorDetail?.image}
                        alt=""
                        className="w-120 h-120 rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                        <h1 className="text-27px text-black font-semibold my-2">
                            {doctorDetail?.name}
                        </h1>
                        <div className="leading-6">
                            <ReactMakedown
                                content={doctorDetail?.description}
                            />
                        </div>
                        <p className="flex items-center justify-start text-sm text-textBooking leading-6">
                            <IoLocationSharp className="text-base" />
                            &nbsp;{doctorDetail?.address}
                        </p>
                        <div className="flex flex-row items-center justify-start gap-x-2 mt-2">
                            <button className="px-3 py-1 bg-bgReaction text-white rounded-md flex items-center justify-center font-semibold text-13px">
                                <AiFillLike />
                                &nbsp; Thich
                            </button>
                            <button className="px-3 py-1 bg-bgReaction text-white rounded-md flex items-center justify-center font-semibold text-13px">
                                <FaShare />
                                &nbsp; Share
                            </button>
                        </div>
                    </div>
                </div>
                <ScheduleSection clinic={doctorDetail?.Clinic} />
            </div>
            <div className="w-full h-px bg-slate-300 mt-4"></div>
            <div className="w-full flex flex-col py-8 px-14 markdown bg-bgIntro">
                <ReactMakedown content={doctorDetail?.introduction} />
            </div>
            <Footer />
        </main>
    );
};

export default DoctorDetail;
