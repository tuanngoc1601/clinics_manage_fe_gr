import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clinicService } from "../../services";
import ReactMakedown from "../../containers/ReactMakedown";
// import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Schedule from "../../components/users/Schedule";

const ClinicDetail = () => {
    const { clinicId } = useParams();
    const [clinicDetail, setClinicDetail] = useState();

    useEffect(() => {
        const getDataClinic = async () => {
            try {
                const res = await clinicService.handleGetClinicDetailService(
                    clinicId
                );
                setClinicDetail(res.data.data);
            } catch (e) {
                console.error(e);
            }
        };

        getDataClinic();
    }, []);

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <div
                style={{ "--image-url": `url(${clinicDetail?.image})` }}
                className="w-full h-340 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat relative"
            >
                <div className="w-11/12 relative bg-bgClinicHeader mx-auto py-2 top-64 shadow-lg">
                    <div className="flex flex-row justify-start items-center px-8 py-2">
                        <div className="w-28 h-28 bg-white">
                            <img
                                src={clinicDetail?.avatar}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col px-8">
                            <h3 className="text-26px font-semibold">
                                {clinicDetail?.name}
                            </h3>
                            <p className="text-lg">{clinicDetail?.address}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between uppercase font-semibold px-28">
                        <div className="cursor-pointer">Đặt lịch khám</div>
                        {clinicDetail?.introduction && (
                            <div className="cursor-pointer">
                                Giới thiệu chung
                            </div>
                        )}
                        {clinicDetail?.technique && (
                            <div className="cursor-pointer">
                                Thế mạnh chuyên môn
                            </div>
                        )}
                        {clinicDetail?.equipment && (
                            <div className="cursor-pointer">Trang thiết bị</div>
                        )}
                        {clinicDetail?.location && (
                            <div className="cursor-pointer">Vị trí</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-11/12 flex flex-col mt-24">
                <div className="bg-bgIntro py-2.5 px-5 text-black text-base">
                    BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện
                    hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện
                    - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và
                    hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.
                </div>
                <div className="px-5 text-base bg-bgIntroduction mt-4 markdown">
                    <ReactMakedown content={clinicDetail?.description} />
                </div>
                {clinicDetail?.Doctors && clinicDetail?.Doctors.length > 0 && (
                    <div className="flex flex-col gap-y-4 my-4">
                        {clinicDetail.Doctors.map((item, index) => (
                            <Schedule
                                key={index}
                                id={item.id}
                                doctor={item}
                                clinicName={clinicDetail?.name}
                                clinicAddress={clinicDetail?.address}
                            />
                        ))}
                    </div>
                )}
                {clinicDetail?.introduction && (
                    <div className="mt-10 markdown">
                        <h3 className="uppercase text-lg font-semibold text-textDate">
                            Giới thiệu chung
                        </h3>
                        <div className="text-lg">
                            <ReactMakedown
                                content={clinicDetail?.introduction}
                            />
                        </div>
                    </div>
                )}
                {clinicDetail?.technique && (
                    <div className="text-lg mt-10 markdown">
                        <h3 className="uppercase text-lg font-semibold text-textDate">
                            Thế mạnh chuyên môn
                        </h3>
                        <div className="text-lg">
                            <ReactMakedown content={clinicDetail?.technique} />
                        </div>
                    </div>
                )}
                {clinicDetail?.equipment && (
                    <div className="text-lg mt-10 markdown">
                        <h3 className="uppercase text-lg font-semibold text-textDate">
                            Trang thiết bị
                        </h3>
                        <div className="text-lg">
                            <ReactMakedown content={clinicDetail?.equipment} />
                        </div>
                    </div>
                )}
                {clinicDetail?.location && (
                    <div className="text-lg my-10 markdown">
                        <h3 className="uppercase text-lg font-semibold text-textDate">
                            Vị trí
                        </h3>
                        <div className="text-lg">
                            <ReactMakedown content={clinicDetail?.location} />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
};

export default ClinicDetail;
