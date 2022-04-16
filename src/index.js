import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers/index';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
