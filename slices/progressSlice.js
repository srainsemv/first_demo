import { createSlice } from "@reduxjs/toolkit";

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
            //state.selectLocationOpen = !state.selectLocationOpen
            state.selectLocationOpen = false
            state.selectDayTimeOpen = true
            state.tdUserFormOpen = false
        },
        toggleSelectDayTime: (state) => {
            state.selectLocationOpen = false
            state.selectDayTimeOpen = false
            state.tdUserFormOpen = true
        },
        toggleTDUserForm: (state) => {
            state.tdUserFormOpen = !state.tdUserFormOpen
        }
    },
})

export const { // 3. Now export the function created in step 2
    toggleNewUserModal,
    toggleSettingsModal,
    toggleDeactivateModal,

    // Test Drive Components
    toggleSelectLocation,
    toggleSelectDayTime,
    toggleTDUserForm,
} = progressSlice.actions

// Step 4 is on (slice/index.js)

export default progressSlice