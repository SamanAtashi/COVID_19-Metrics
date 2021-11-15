import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/configureStore';
import { fetchToDisplay } from './Redux/Reducer';

store.dispatch(fetchToDisplay());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
