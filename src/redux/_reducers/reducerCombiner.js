import candidatesReducer from "./candidatesReducer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    candidatesReducer: candidatesReducer,
})