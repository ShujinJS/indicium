import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./_reducers/reducerCombiner";

export const appStore = createStore(
    rootReducer,
    applyMiddleware(thunk)
);