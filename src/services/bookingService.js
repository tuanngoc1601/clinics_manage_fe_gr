import { createAxiosBaseUrl } from "../axios";

const axiosClient = createAxiosBaseUrl();

export const handleGetBookingInfoService = (schedule_id) => {
    return axiosClient.get(`/api/v1/booking/get-booking-info/${schedule_id}`);
};

export const createBookingScheduleService = (data) => {
    return axiosClient.post("/api/v1/booking/booking-schedule", data);
};
