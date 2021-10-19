import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers/indexReducer.js";

// storing redux reducers (in a cloud) so that fetched data (from postReducer)can be used by all elements in Provider tag
const store = createStore(reducers, compose(applyMiddleware(thunk))); // installing thunk from redux to dispatch actions asynchronously

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);//render the App to index.html root id element/DIV

