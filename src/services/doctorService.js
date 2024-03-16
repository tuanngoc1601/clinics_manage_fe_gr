import { createAxiosBaseUrl } from "../axios";

const axiosClient = createAxiosBaseUrl();

export const handleGetDoctorDetailService = (doctorId) => {
    return axiosClient.get(`/api/v1/doctor/get-doctor-by-id/${doctorId}`);
};
