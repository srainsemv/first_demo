import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const progressSlice = createSlice({
    name: "progress",
    initialState: { // 1. Create an initial state for the slices
        newUserModalOpen: false,
        deactivateModalOpen: false,
        settingsModalOpen: false,

        // Test Drive Components
        selectLocationOpen: true,
        selectDayTimeOpen: false,
        tdUserFormOpen: false,
        selectedLocation: {"id": 2, "name":""},
        selectedDate: new Date(),
    },
    reducers: { // 2. Create a reducer function that can change the state
        toggleNewUserModal: (state) => {
            state.newUserModalOpen = !state.newUserModalOpen
        },
        toggleSettingsModal: (state) => {
            state.settingsModalOpen = !state.settingsModalOpen
        },
        toggleDeactivateModal: (state) => {
            state.deactivateModalOpen = !state.deactivateModalOpen
        },

        // Test Drive Components
        toggleSelectLocation: (state) => {
            state.selectLocationOpen = true
            state.selectDayTimeOpen = false
            state.tdUserFormOpen = false
        },
        toggleTDUserForm: (state) => {
            state.selectLocationOpen = false
            state.selectDayTimeOpen = false
            state.tdUserFormOpen = true
        },

        setLocationState(state, action) {
            state.selectedLocation = action.payload[0]
            state.selectLocationOpen = false
            state.selectDayTimeOpen = true
            state.tdUserFormOpen = false
        },

        setSelectedDate(state, action) {
            console.log(action.payload)
            state.selectedDate = action.payload;
        }
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
})

export const { // 3. Now export the function created in step 2
    toggleNewUserModal,
    toggleSettingsModal,
    toggleDeactivateModal,

    // Test Drive Components
    toggleSelectLocation,
    toggleTDUserForm,
} = progressSlice.actions

export const { setLocationState } = progressSlice.actions;
export const { setSelectedDate } = progressSlice.actions;

// Step 4 is on (slice/index.js)

export default progressSlice