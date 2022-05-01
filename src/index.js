import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

import { CategoriesProvider } from './contexts/categories';
import { CartProvider } from './contexts/cart';

const rootElement = document.getElementById('root');

// products need to access the users
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
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
