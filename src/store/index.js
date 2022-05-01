import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';

const middleWares = [logger];

export const store = createStore(rootReducer, undefined, compose(applyMiddleware(...middleWares)));
