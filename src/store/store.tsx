import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import type { PersistConfig } from "redux-persist";
import storage from "redux-persist/es/storage"; 
import authSlice from "./slices/authSlice";


// Define all Slices inside the rootReducer

const rootReducer = combineReducers({
  auth: authSlice,
});

// Define the persistConfig

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
};

// Define the persistedReducer

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Define the store

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Define the persistor

const persistor = persistStore(store);

// Export the store and persistor

export { store, persistor };

// Export RootState and AppDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;