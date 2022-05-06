import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe";

const rootElement = document.getElementById("root");

// products need to access the users
render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement,
);

/**
 * Important migration:
 *  Centralized nested context providers reduce the code understandability, and hard to manage the nested logic.
 *    (e.g., which components need to have access to another component, should put this one above or
 *    below the other one)
 *
 *  Distributed context providers reduce the code accessibility for the possible furture extensions.
 *
 * => Context to the Redux Store.
 */
