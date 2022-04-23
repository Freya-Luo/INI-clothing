import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user';
import { CategoriesProvider } from './contexts/categories';
import { CartProvider } from './contexts/cart';

const rootElement = document.getElementById('root');

// products need to access the users
render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
