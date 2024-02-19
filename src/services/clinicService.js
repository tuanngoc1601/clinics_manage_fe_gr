import { createAxiosBaseUrl } from "../axios";

const axiosClient = createAxiosBaseUrl();

export const handleGetAllClinicsService = () => {
    return axiosClient.get("/api/v1/clinic/get-all-clinics");
};
