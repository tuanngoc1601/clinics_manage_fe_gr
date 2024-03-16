import React from "react";
// import Header from "../../components/header/Header";
import FooterBooking from "../../components/footer/FooterBooking";
import BookingForm from "../../components/users/Booking/BookingForm";

const Booking = () => {
    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            {/* <Header /> */}
            <div className="w-full bg-bgDoctorBooking py-5 px-4">
                <div className="w-1/2 flex flex-row items-start justify-start mx-auto">
                    <img
                        src={
                            "https://cdn.bookingcare.vn/fo/w256/2021/06/15/152136-bs-tri.jpg"
                        }
                        alt=""
                        className="w-100 h-100 rounded-full object-cover"
                    />
                    <div className="flex flex-col ms-4">
                        <p className="text-textBooking text-sm">
                            ĐẶT LỊCH KHÁM
                        </p>
                        <p className="text-textDate text-base font-semibold">
                            Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí
                        </p>
                        <p className="text-13px text-textBooking">
                            08:30 - 09:00 - Thứ 3 - 09/01/2024
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-white">
                <div className="w-44 text-sm p-2.5 border rounded-md border-borderPrice shadow-md my-4 mx-2">
                    <p className="text-center">Giá khám</p>
                    <p className="text-center">300.000đ</p>
                </div>
                <div className="flex justify-start items-center gap-x-6 mt-2">
                    <div className="flex gap-2 text-sm text-textColor">
                        <input type="radio" value="0" id="0" checked />
                        <label htmlFor="0">Đặt cho mình</label>
                    </div>
                    <div className="flex gap-2 text-sm text-textColor">
                        <input type="radio" value="1" id="1" />
                        <label htmlFor="1">Đặt cho người thân</label>
                    </div>
                </div>
                <BookingForm />
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
                    Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời
                    gian làm thủ tục khám
                </p>
                <div className="w-full bg-bgNote rounded-md p-4">
                    <h3 className="text-sm text-black font-bold">LƯU Ý</h3>
                    <p className="text-sm leading-6 mt-2">
                        Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ
                        khám bệnh, khi điền thông tin anh/chị vui lòng:
                    </p>
                    <ul className="w-full list-disc px-4">
                        <li className="text-sm text-black leading-6">
                            Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên,
                            ví dụ: <strong>Trần Văn Phú</strong>
                        </li>
                        <li className="text-sm text-black leading-6">
                            Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin
                            trước khi ấn "Xác nhận"
                        </li>
                    </ul>
                </div>
                <button className="w-full text-white px-4 py-2 text-base bg-bgButtonBooking my-4 rounded-md font-semibold">
                    Xác nhận đơn khám
                </button>
                <p className="text-13px text-textAddress text-center">
                    Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý với{" "}
                    <span className="text-textPrimary">Điều khoản sử dụng</span>{" "}
                    dịch vụ của chúng tôi.
                </p>
            </div>
            <FooterBooking />
        </main>
    );
};

export default Booking;
