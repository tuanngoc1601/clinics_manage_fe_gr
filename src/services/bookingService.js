import { createAxiosBaseUrl } from "../axios";

const axiosClient = createAxiosBaseUrl();

export const handleGetBookingInfoService = (schedule_id) => {
    return axiosClient.get(`/api/v1/booking/get-booking-info/${schedule_id}`);
};
