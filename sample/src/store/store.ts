import { createStore, applyMiddleware, combineReducers } from 'redux';
import Logger from 'redux-logger';

import reducer from './reducer';

const PRODUCTION = process.env.NODE_ENV === 'production';

const configureStore = () => {
    const middlewares = [];

    if (!PRODUCTION) {
        middlewares.push(Logger);
    }

    const store = createStore(combineReducers<any>({reducer}), applyMiddleware(...middlewares));

    return store;
};

export default configureStore;