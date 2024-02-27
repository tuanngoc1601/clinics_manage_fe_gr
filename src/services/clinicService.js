import { createAxiosBaseUrl } from "../axios";

const axiosClient = createAxiosBaseUrl();

export const handleGetAllClinicsService = () => {
    return axiosClient.get("/api/v1/clinic/get-all-clinics");
};

export const handleGetClinicDetailService = (clinicId) => {
    return axiosClient.get(`/api/v1/clinic/get-clinic-by-id/${clinicId}`);
};
