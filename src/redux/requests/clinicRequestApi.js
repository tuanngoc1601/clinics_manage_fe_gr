import {
    getAllClinicsStart,
    getAllClinicsSuccess,
    getAllClinicsFailed,
} from "../clinicSlice";
import { clinicService } from "../../services";

export const getAllClinics = async (dispatch) => {
    dispatch(getAllClinicsStart());
    try {
        const res = await clinicService.handleGetAllClinicsService();
        dispatch(getAllClinicsSuccess(res.data.data));
    } catch (err) {
        dispatch(getAllClinicsFailed());
    }
};