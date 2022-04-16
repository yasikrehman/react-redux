import { combineReducers } from 'redux';
import counter from './counter';
import textReducer from './textReducer';

export default combineReducers({ counter, getText: textReducer });
