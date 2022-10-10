import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import AuthSlice from "../slice/AuthSlice"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authUser'],
}

const rootReducer = combineReducers({
    authUser: AuthSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export default store;
