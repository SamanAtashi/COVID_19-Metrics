import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import myreducer from './Reducer';

const reducer = {
  myreducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
});

export default store;
