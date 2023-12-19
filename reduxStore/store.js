import {configureStore,combineReducers} from '@reduxjs/toolkit'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import TokenReducer from './Slice/storeSlice'


const rootReducer = combineReducers({
    tok: TokenReducer,
})

const saveConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(saveConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools:true
})

export const persistor = persistStore(store)
export default store
