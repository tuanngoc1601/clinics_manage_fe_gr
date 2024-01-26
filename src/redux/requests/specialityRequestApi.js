import {
    getAllSpecialitiesStart,
    getAllSpecialitiesSuccess,
    getAllSpecialitiesFailed,
} from "../specialitySlice";
import { specialityService } from "../../services";

export const getAllSpecialities = async (dispatch) => {
    dispatch(getAllSpecialitiesStart());
    try {
        const res = await specialityService.handleGetAllSpecialitiesService();
        dispatch(getAllSpecialitiesSuccess(res.data.data));
    } catch (err) {
        dispatch(getAllSpecialitiesFailed());
    }
};