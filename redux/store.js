import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer,persistStore } from "redux-persist";
import todos from "./reducers/todo/todoSlice";


const rootReducer = combineReducers({
    todos: todos,
})

const configuration = {
    key:'root',
    storage: AsyncStorage,
    version:1 
}
const persistedReducer = persistReducer(configuration,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: getMiddleWare => { 
        return getMiddleWare({
            serializableCheck: false,
        })
    }
})
export const persistor = persistStore(store)
// persistor.purge()