import React, { useEffect, useState } from "react";
import TimeSchedule from "./TimeSchedule";
import ReactMakedown from "../../containers/ReactMakedown";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegHandPointer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helper";
import { scheduleService } from "../../services";

const Schedule = (props) => {
    const [dateSchedule, setDateSchedule] = useState(formatDate(new Date()));
    const [scheduleTimes, setScheduleTimes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const schedules =
                    await scheduleService.getScheduleDoctorService(
                        props?.doctor?.id,
                        dateSchedule
                    );
                setScheduleTimes(schedules.data.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [dateSchedule, props?.doctor?.id]);

    return (
        <div className="w-full p-2 flex flex-row divide-x border bg-white shadow-lg rounded-xl py-4">
            <div className="w-1/2 flex flex-row py-2">
                <Link
                    to={`/doctors/${props?.doctor?.id}`}
                    className="flex-none"
                >
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
                <input
                    type="date"
                    id="schedule"
                    name="schedule"
                    value={dateSchedule}
                    max="2099-12-31"
                    onChange={(e) =>
                        setDateSchedule(formatDate(e.target.value))
                    }
                    className="px-4 py-2 border-b text-sm ms-4 text-textDate font-semibold outline-none"
                />
                <p className="flex flex-row items-center justify-center text-sm font-semibold px-4 mt-2 gap-x-2">
                    <span>
                        <AiOutlineSchedule className="text-lg font-semibold" />
                    </span>
                    LỊCH KHÁM
                </p>
                <div className="flex flex-row flex-wrap ps-4 mt-4 gap-2.5">
                    {!!scheduleTimes?.length ? (
                        scheduleTimes.map((schedule) => (
                            <TimeSchedule
                                key={schedule.id}
                                id={schedule.id}
                                time={schedule.time.value}
                            />
                        ))
                    ) : (
                        <p>Không có lịch khám</p>
                    )}
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
