// Gom lại tất cả reducer
import appReducer from "./appReducer";
import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const commonConfig = {
    storage: storage,
    stateReconsiler: autoMergeLevel2,
};

const musicConfig = {
    ...commonConfig,
    key: "music",
    whitelist: ["curSongId"],
};

const rootReducer = combineReducers({
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer),
});

export default rootReducer;
