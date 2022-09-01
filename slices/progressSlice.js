import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
    name: "progress",
    initialState: { // 1. Create an initial state for the slices
        newUserModalOpen: false,
        deactivateModalOpen: false,
        settingsModalOpen: false,
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
        }
    },
})

export const { // 3. Now export the function created in step 2
    toggleNewUserModal,
    toggleSettingsModal,
    toggleDeactivateModal,
} = progressSlice.actions

// Step 4 is on (slice/index.js)

export default progressSlice