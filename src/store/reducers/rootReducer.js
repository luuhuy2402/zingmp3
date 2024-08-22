// Gom lại tất cả reducer 
import appReducer from "./appReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    app:appReducer,
})

export default rootReducer