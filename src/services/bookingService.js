import { createAxiosBaseUrl, createAxiosClient } from "../axios";

const axiosClient = createAxiosBaseUrl();

const axiosClientToken = createAxiosClient();

export const handleGetBookingInfoService = (schedule_id) => {
    return axiosClient.get(`/api/v1/booking/get-booking-info/${schedule_id}`);
};

export const createBookingScheduleService = (data) => {
    return axiosClientToken.post("/api/v1/booking/booking-schedule", data);
};
