import React from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const BookingForm = () => {
    return (
        <div className="w-full">
            <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-4">
                <span>
                    <FaUser className="text-textAddress" />
                </span>
                <input
                    type="text"
                    placeholder="Họ tên bệnh nhân (bắt buộc)"
                    className="w-full ps-4 outline-none"
                />
            </div>
            <p className="text-13px text-textAddress mt-1">
                Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ:
                Trần Văn Phú
            </p>
            <div className="flex justify-start items-center gap-x-6 mt-2">
                <div className="flex gap-2 text-sm text-textColor">
                    <input type="radio" value="male" id="male" />
                    <label htmlFor="male">Nam</label>
                </div>
                <div className="flex gap-2 text-sm text-textColor">
                    <input type="radio" value="female" id="female" />
                    <label htmlFor="female">Nữ</label>
                </div>
            </div>
            <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                <span>
                    <FaPhoneAlt className="text-textAddress" />
                </span>
                <input
                    type="text"
                    placeholder="Số điện thoại liên hệ (bắt buộc)"
                    className="w-full ps-4 outline-none"
                />
            </div>
            <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                <span>
                    <GrSchedule className="text-textAddress" />
                </span>
                <input
                    type="number"
                    placeholder="Năm sinh (bắt buộc)"
                    className="w-full ps-4 outline-none"
                />
            </div>
            <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                <span>
                    <MdLocationOn className="text-textAddress" />
                </span>
                <select
                    name="city"
                    id="city"
                    className="w-full ps-4 outline-none"
                >
                    <option value="all">-- Chọn Tỉnh/Thành --</option>
                    <option value="1">Hà Nội</option>
                    <option value="2">Thành phố Hồ Chí Minh</option>
                </select>
            </div>
            <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                <span>
                    <MdLocationOn className="text-textAddress" />
                </span>
                <select
                    name="district"
                    value="district"
                    className="w-full ps-4 outline-none"
                >
                    <option value="all">-- Chọn Quận/Huyện --</option>
                </select>
            </div>
            <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                <span>
                    <MdLocationOn className="text-textAddress" />
                </span>
                <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="w-full ps-4 outline-none"
                />
            </div>
            <div className="w-full flex items-start border rounded-md text-sm px-4 py-3 mt-2">
                <span className="text-textAddress">
                    <IoMdAddCircle />
                </span>
                <textarea
                    id="reason"
                    name="reason"
                    placeholder="Lý do khám"
                    className="w-full ps-4 resize-none"
                ></textarea>
            </div>
        </div>
    );
};

export default BookingForm;
