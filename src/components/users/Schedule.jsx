import React from "react";
import TimeSchedule from "./TimeSchedule";
import ReactMakedown from "../../containers/ReactMakedown";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChevronDown, FaRegHandPointer } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Schedule = (props) => {
    return (
        <div className="w-full p-2 flex flex-row divide-x border bg-white shadow-lg rounded-xl py-4">
            <div className="w-1/2 flex flex-row py-2">
                <Link to={`/doctors/${props?.doctor?.id}`} className="flex-none">
                    <img
                        src={props?.doctor?.image ?? ""}
                        alt=""
                        className="w-20 h-20 rounded-full object-cover"
                    />
                </Link>
                <div className="px-4 text-sm text-textAddress leading-6">
                    <Link to={`/doctors/${props?.doctor?.id}`}>
                        <h3 className="text-lg text-textPrimary font-semibold">
                            {props?.doctor?.name ??
                                "Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí"}
                        </h3>
                    </Link>
                    {<ReactMakedown content={props?.doctor?.description} /> ??
                        ""}
                    <p className="flex justify-start items-center text-sm leading-6">
                        <span>
                            <IoLocationSharp />
                        </span>
                        {props?.doctor?.address ?? ""}
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-start justify-start px-4">
                <button className="flex items-center px-4 py-2 border-b text-sm ms-4 text-textDate font-semibold">
                    Hôm nay - 9/1 <FaChevronDown className="ms-2" />
                </button>
                <p className="flex flex-row items-center justify-center text-sm font-semibold px-4 mt-2 gap-x-2">
                    <span>
                        <AiOutlineSchedule className="text-lg font-semibold" />
                    </span>
                    LỊCH KHÁM
                </p>
                <div className="flex flex-row flex-wrap ps-4 mt-4 gap-2.5">
                    <TimeSchedule time={"08:30 - 09:00"} />
                    <TimeSchedule time={"09:00 - 09:30"} />
                    <TimeSchedule time={"09:30 - 10:00"} />
                    <TimeSchedule time={"10:00 - 10:30"} />
                    <TimeSchedule time={"10:30 - 11:00"} />
                    <TimeSchedule time={"14:00 - 14:30"} />
                    <TimeSchedule time={"14:30 - 15:00"} />
                    <TimeSchedule time={"15:00 - 15:30"} />
                    <TimeSchedule time={"15:30 - 16:00"} />
                    <TimeSchedule time={"16:00 - 16:30"} />
                </div>
                <p className="flex text-xs text-textColor px-4 mt-2">
                    Chọn <FaRegHandPointer className="text-sm mx-1" /> và đặt
                    (Phí đặt lịch 0đ)
                </p>
                <div className="w-full h-px bg-slate-300 mx-4 mt-2"></div>
                <div className="w-full px-4 mt-2">
                    <p className="text-sm text-textAddress font-semibold">
                        ĐỊA CHỈ KHÁM
                    </p>
                    <p className="text-sm text-black font-semibold leading-6">
                        {props?.clinicName ?? ""}
                    </p>
                    <p className="text-sm text-black font-normal leading-6">
                        {props?.clinicAddress ?? ""}
                    </p>
                </div>
                <div className="w-full h-px bg-slate-300 mx-4 mt-2"></div>
                <p className="text-sm px-4 mt-4">
                    <span className="text-textAddress font-semibold">
                        GIÁ KHÁM:
                    </span>{" "}
                    <span>300.000đ - 400.000đ</span>{" "}
                    <span className="text-textPrimary cursor-pointer font-semibold">
                        Xem chi tiết
                    </span>
                </p>
                <p className="text-sm px-4 mt-4">
                    <span className="text-textAddress font-semibold">
                        LOẠI BẢO HIỂM ÁP DỤNG.
                    </span>{" "}
                    <span className="text-textPrimary cursor-pointer font-semibold">
                        Xem chi tiết
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Schedule;
