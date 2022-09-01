import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import progressSlice from "./progressSlice"; // 4. This is what we exported in step 3 in (progressSlice.js)

const rootReducer = combineReducers({
    progress: progressSlice.reducer
    // Other reducers will be added here
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [],
            ignoredPaths: [],
        },
    }),
})