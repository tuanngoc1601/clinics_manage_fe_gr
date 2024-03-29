import { createAxiosBaseUrl } from "../axios";

const axiosClient = createAxiosBaseUrl();

// const axiosClientToken = createAxiosClient();

export const handleGetAllSpecialitiesService = () => {
    return axiosClient.get("/api/v1/speciality/get-all-specialities");
};

export const handleGetSpecialityDetailService = (specialityId) => {
    return axiosClient.get(
        `/api/v1/speciality/get-speciality-detail/${specialityId}`
    );
};
