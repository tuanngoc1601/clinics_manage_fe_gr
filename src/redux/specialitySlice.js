import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    specialities: {
        data: null,
        pendding: false,
        error: false,
    },
}

const specialitySlice = createSlice({
    name: "speciality",
    initialState,
    reducers: {
        getAllSpecialitiesStart: (state) => {
            state.specialities.pendding = true;
        },
        getAllSpecialitiesSuccess: (state, action) => {
            state.specialities.pendding = false;
            state.specialities.data = action.payload;
            state.specialities.error = false;
        },
        getAllSpecialitiesFailed: (state) => {
            state.specialities.pendding = false;
            state.specialities.error = true;
        },
        
        resetSpecialtyStateRedux: () => initialState,
    },
});

export const {
    getAllSpecialitiesStart,
    getAllSpecialitiesSuccess,
    getAllSpecialitiesFailed,
    resetSpecialtyStateRedux,
} = specialitySlice.actions;

export default specialitySlice.reducer;