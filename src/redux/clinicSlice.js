import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clinics: {
        data: null,
        pendding: false,
        error: false,
    },
}

const clinicSlice = createSlice({
    name: "clinic",
    initialState,
    reducers: {
        getAllClinicsStart: (state) => {
            state.clinics.pendding = true;
        },
        getAllClinicsSuccess: (state, action) => {
            state.clinics.pendding = false;
            state.clinics.data = action.payload;
            state.clinics.error = false;
        },
        getAllClinicsFailed: (state) => {
            state.clinics.pendding = false;
            state.clinics.error = true;
        },
        
        resetClinicsStateRedux: () => initialState,
    },
});

export const {
    getAllClinicsStart,
    getAllClinicsSuccess,
    getAllClinicsFailed,
    resetSpecialtyStateRedux,
} = clinicSlice.actions;

export default clinicSlice.reducer;