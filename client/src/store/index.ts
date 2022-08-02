import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

/* adddress typed window object */
declare global {
  interface Window {
    // already existed interface window
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export type RootState = ReturnType<typeof rootReducer>;

// use redux devetools Chrome extension in the development mode
const composeEnhancer =
  (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// log redux state changes when in development mode
const middleWares = process.env.NODE_ENV === "development" ? [logger, thunk] : [thunk];

type customPersistConfig = PersistConfig<RootState> & {
  blacklist: (keyof RootState)[];
};
const persistConfig: customPersistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // exclude some reducers to not persist them
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancer(applyMiddleware(...middleWares)));

export const persistor = persistStore(store);
