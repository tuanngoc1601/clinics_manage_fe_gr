import React, { useState, useEffect } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import TimeSchedule from "../TimeSchedule";
import { FaRegHandPointer } from "react-icons/fa6";
import { formatDate } from "../../../utils/helper";
import { scheduleService } from "../../../services";

const ScheduleSection = (props) => {
    const [dateSchedule, setDateSchedule] = useState(formatDate(new Date()));
    const [scheduleTimes, setScheduleTimes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const schedules =
                    await scheduleService.getScheduleDoctorService(
                        props?.id,
                        dateSchedule
                    );
                setScheduleTimes(schedules.data.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [dateSchedule, props?.id]);

    return (
        <div className="w-full flex flex-row divide-x mt-4">
            <div className="w-1/2 flex flex-col items-start justify-start">
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
                    {!!scheduleTimes.length ? (
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
            </div>
            <div className="w-1/2 flex flex-col items-start justify-end">
                <div className="w-full px-4 mt-2">
                    <p className="text-sm text-textAddress font-semibold">
                        ĐỊA CHỈ KHÁM
                    </p>
                    <p className="text-13px text-black font-semibold leading-6">
                        {props?.clinic?.name}
                    </p>
                    <p className="text-13px text-black font-normal leading-6">
                        {props?.clinic?.address}
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

export default ScheduleSection;
