import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

// log redux state changes when in development mode
const middleWares = process.env.NODE_ENV === "development" ? [logger, thunk] : [];

// use redux devetools Chrome extension in the development mode
const composeEnhancer =
  (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // exclude some reducers to not persist them
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancer(applyMiddleware(...middleWares)));

export const persistor = persistStore(store);
