import React from "react";
import { Link } from "react-router-dom";

const TimeSchedule = ({ time }) => {
    return (
        <Link to={"/bookings/1"}>
            <div className="px-4 py-2 text-sm font-semibold text-textColor hover:boder-2 hover:border-cyan-400 text-center border-transparent bg-bgTimeSchedule cursor-pointer">
                {time}
            </div>
        </Link>
    );
};

export default TimeSchedule;
