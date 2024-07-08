import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const FooterBooking = () => {
    return (
        <footer className="w-full backdrop-blur-md flex items-center justify-between px-20 py-6 mt-10 bg-primary">
            <div className="flex flex-col text-sm">
                <p className="leading-7">© 2024 - DATN - Health Grades.</p>
                <p className="flex items-center justify-start leading-7 gap-x-2 text-textPrimary">
                    <span>
                        <FaPhoneAlt />
                    </span>
                    HỖ TRỢ: 024-7301-2468
                </p>
            </div>
        </footer>
    );
};

export default FooterBooking;
