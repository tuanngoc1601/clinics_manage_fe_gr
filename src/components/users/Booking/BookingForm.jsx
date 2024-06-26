import React, { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { bookingService } from "../../../services";

const BookingForm = ({ yourSelf, schedule_id }) => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.auth.login.currentUser);
    const [bookingData, setBookingData] = useState({
        patient_name: "",
        gender: "",
        phone_number: "",
        birth_date: "",
        province: "",
        district: "",
        address: "",
        reason: "",
        scheduler_name: "",
        scheduler_phone: "",
    });

    const handleOnChangeBookingForm = (e, type) => {
        const previouState = { ...bookingData };
        previouState[type] = e.target.value;
        setBookingData(previouState);
    };

    const submitBookingForm = async () => {
        if (!currentUser) {
            toast.error("Authorization failed!");
            setTimeout(() => {
                navigate("/login", { replace: true });
            }, 3000);
        }
        const { scheduler_name, scheduler_phone, ...formData } = bookingData;
        const data = {
            user_id: currentUser?.id,
            email: currentUser?.email,
            schedule_id: schedule_id,
            your_self: yourSelf === "0" ? true : false,
            ...formData,
            scheduler_name: scheduler_name !== "" ? scheduler_name : null,
            scheduler_phone: scheduler_phone !== "" ? scheduler_phone : null,
        };

        const response = await bookingService.createBookingScheduleService(
            data
        );

        if (response.status === 201) {
            toast.success("Booking schedule created successfully!");
        } else {
            toast.error("Schedule is booked!");
        }
    };

    return (
        <>
            <div className="w-full">
                {yourSelf === "1" && (
                    <>
                        <p className="text-xs text-textDate font-semibold mt-2">
                            Thông tin người đặt lịch
                        </p>
                        <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                            <span>
                                <FaUser className="text-textAddress" />
                            </span>
                            <input
                                type="text"
                                placeholder="Họ tên người đặt lịch"
                                className="w-full ps-4 outline-none"
                                value={bookingData.scheduler_name}
                                onChange={(e) =>
                                    handleOnChangeBookingForm(
                                        e,
                                        "scheduler_name"
                                    )
                                }
                            />
                        </div>
                        <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                            <span>
                                <FaPhoneAlt className="text-textAddress" />
                            </span>
                            <input
                                type="text"
                                placeholder="Số điện thoại liên hệ (bắt buộc)"
                                className="w-full ps-4 outline-none"
                                value={bookingData.scheduler_phone}
                                onChange={(e) =>
                                    handleOnChangeBookingForm(
                                        e,
                                        "scheduler_phone"
                                    )
                                }
                            />
                        </div>
                        <p className="text-xs text-textDate font-semibold mt-2">
                            Thông tin bệnh nhân
                        </p>
                    </>
                )}
                <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                    <span>
                        <FaUser className="text-textAddress" />
                    </span>
                    <input
                        type="text"
                        placeholder="Họ tên bệnh nhân (bắt buộc)"
                        className="w-full ps-4 outline-none"
                        value={bookingData.patient_name}
                        onChange={(e) =>
                            handleOnChangeBookingForm(e, "patient_name")
                        }
                    />
                </div>
                <p className="text-13px text-textAddress mt-1">
                    Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví
                    dụ: Trần Văn Phú
                </p>
                <div className="flex justify-start items-center gap-x-6 mt-2">
                    <div className="flex gap-2 text-sm text-textColor">
                        <input
                            type="radio"
                            value="male"
                            id="male"
                            name="gender"
                            checked={bookingData.gender === "male"}
                            onChange={(e) =>
                                handleOnChangeBookingForm(e, "gender")
                            }
                        />
                        <label htmlFor="male">Nam</label>
                    </div>
                    <div className="flex gap-2 text-sm text-textColor">
                        <input
                            type="radio"
                            value="female"
                            id="female"
                            name="gender"
                            checked={bookingData.gender === "female"}
                            onChange={(e) =>
                                handleOnChangeBookingForm(e, "gender")
                            }
                        />
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
                        value={bookingData.phone_number}
                        onChange={(e) =>
                            handleOnChangeBookingForm(e, "phone_number")
                        }
                    />
                </div>
                <div className="w-full flex items-center border rounded-md text-sm px-4 py-3 mt-2">
                    <span>
                        <GrSchedule className="text-textAddress" />
                    </span>
                    <input
                        type="date"
                        placeholder="Năm sinh (bắt buộc)"
                        className="w-full ps-4 outline-none"
                        value={bookingData.birth_date}
                        onChange={(e) =>
                            handleOnChangeBookingForm(e, "birth_date")
                        }
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
                        value={bookingData.province}
                        onChange={(e) =>
                            handleOnChangeBookingForm(e, "province")
                        }
                    >
                        <option value="">-- Chọn Tỉnh/Thành --</option>
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
                        id="district"
                        className="w-full ps-4 outline-none"
                        value={bookingData.district}
                        onChange={(e) =>
                            handleOnChangeBookingForm(e, "district")
                        }
                    >
                        <option value="">-- Chọn Quận/Huyện --</option>
                        <option value="1">-- Quận Hà Đông --</option>
                        <option value="2">-- Quận Hoàng Mai --</option>
                        <option value="3">-- Quận Cầu Giấy --</option>
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
                        value={bookingData.address}
                        onChange={(e) =>
                            handleOnChangeBookingForm(e, "address")
                        }
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
                        className="w-full ps-4 resize-none outline-none"
                        value={bookingData.reason}
                        onChange={(e) => handleOnChangeBookingForm(e, "reason")}
                    ></textarea>
                </div>
            </div>
            <p className="text-xs text-textDate font-semibold my-2">
                Hình thức thanh toán
            </p>
            <div className="flex items-center justify-start gap-2">
                <input type="radio" value="online" id="checkout" checked />
                <span className="text-sm text-textColor">
                    Thanh toán trực tuyến
                </span>
            </div>
            <div className="w-full flex flex-col bg-bgDoctorBooking rounded-md divide-y p-4 my-2 gap-y-2">
                <div className="text-sm">
                    <p className="flex flex-row items-center justify-between leading-7">
                        <span>Giá khám</span>
                        <span>300.000đ</span>
                    </p>
                    <p className="flex flex-row items-center justify-between leading-7">
                        <span>Phí đặt lịch</span>
                        <span>Miễn phí</span>
                    </p>
                </div>
                <div className="text-sm pt-2">
                    <p className="flex flex-row items-center justify-between leading-7">
                        <span>Tổng cộng</span>
                        <span className="text-red-500">300.000đ</span>
                    </p>
                </div>
            </div>
            <p className="text-13px text-textAddress my-2 text-center">
                Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian
                làm thủ tục khám
            </p>
            <div className="w-full bg-bgNote rounded-md p-4">
                <h3 className="text-sm text-black font-bold">LƯU Ý</h3>
                <p className="text-sm leading-6 mt-2">
                    Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám
                    bệnh, khi điền thông tin anh/chị vui lòng:
                </p>
                <ul className="w-full list-disc px-4">
                    <li className="text-sm text-black leading-6">
                        Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví
                        dụ: <strong>Trần Văn Phú</strong>
                    </li>
                    <li className="text-sm text-black leading-6">
                        Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin
                        trước khi ấn "Xác nhận"
                    </li>
                </ul>
            </div>
            <button
                className="w-full text-white px-4 py-2 text-base bg-bgButtonBooking my-4 rounded-md font-semibold"
                onClick={submitBookingForm}
            >
                Xác nhận đơn khám
            </button>
            <p className="text-13px text-textAddress text-center">
                Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý với{" "}
                <span className="text-textPrimary">Điều khoản sử dụng</span>{" "}
                dịch vụ của chúng tôi.
            </p>
        </>
    );
};

export default BookingForm;
