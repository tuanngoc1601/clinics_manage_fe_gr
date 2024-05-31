import React, { useEffect, useState } from "react";
import FooterBooking from "../../components/footer/FooterBooking";
import BookingForm from "../../components/users/Booking/BookingForm";
import { useParams } from "react-router-dom";
import { bookingService } from "../../services";
import { getDayFormat } from "../../utils/helper";

const Booking = () => {
    const { schedule_id } = useParams();
    const [bookingInfo, setBookingInfo] = useState();
    const [yourSelf, setYourSelf] = useState("0");

    const onOptionChange = (e) => {
        setYourSelf(e.target.value);
    };

    useEffect(() => {
        (async () => {
            try {
                const booking =
                    await bookingService.handleGetBookingInfoService(
                        schedule_id
                    );
                setBookingInfo(booking.data.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [schedule_id]);

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
            <div className="w-full bg-bgDoctorBooking py-5 px-4">
                <div className="w-1/2 flex flex-row items-start justify-start mx-auto">
                    <img
                        src={bookingInfo?.Doctor?.image}
                        alt=""
                        className="w-100 h-100 rounded-full object-cover"
                    />
                    <div className="flex flex-col ms-4">
                        <p className="text-textBooking text-sm">
                            ĐẶT LỊCH KHÁM
                        </p>
                        <p className="text-textDate text-base font-semibold">
                            {bookingInfo?.Doctor?.name}
                        </p>
                        <p className="text-textBooking text-sm font-semibold">
                            {bookingInfo?.Clinic?.name}
                        </p>
                        <p className="text-13px text-textBooking">
                            {bookingInfo?.time?.value} -{" "}
                            {getDayFormat(bookingInfo?.booking_date)}
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
                    <div className="flex gap-2 text-sm text-textColor cursor-pointer">
                        <input
                            type="radio"
                            value="0"
                            name="your_self"
                            id="0"
                            checked={yourSelf === "0"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="0">Đặt cho mình</label>
                    </div>
                    <div className="flex gap-2 text-sm text-textColor cursor-pointer">
                        <input
                            type="radio"
                            value="1"
                            name="your_self"
                            id="1"
                            checked={yourSelf === "1"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="1">Đặt cho người thân</label>
                    </div>
                </div>
                <BookingForm yourSelf={yourSelf} schedule_id={schedule_id} />
            </div>
            <FooterBooking />
        </main>
    );
};

export default Booking;
