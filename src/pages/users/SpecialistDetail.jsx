import React, { useEffect, useState } from "react";
import { specialityService } from "../../services";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Schedule from "../../components/users/Schedule";
import { IoMdHome } from "react-icons/io";

const SpecialistDetail = () => {
    const { specialityId } = useParams();
    const [specialityDetail, setSpecialityDetail] = useState();

    useEffect(() => {
        (async () => {
            try {
                const res =
                    await specialityService.handleGetSpecialityDetailService(
                        specialityId
                    );
                setSpecialityDetail(res.data.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    console.log(specialityDetail);

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <div className="w-full px-10">
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
                <h3 className="text-xl px-2 font-semibold text-headingColor">
                    {specialityDetail?.name}
                </h3>
                <div className="w-full flex flex-col bg-bgTimeSchedule px-2 py-4 mt-4 gap-y-4">
                    {specialityDetail &&
                        specialityDetail?.doctors.length > 0 &&
                        specialityDetail.doctors.map((doctor, index) => (
                            <Schedule
                                key={index}
                                doctor={doctor}
                                clinicName={doctor.Clinic?.name}
                                clinicAddress={doctor.Clinic?.address}
                            />
                        ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default SpecialistDetail;
