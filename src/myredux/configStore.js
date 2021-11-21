import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './myreducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
