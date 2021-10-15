import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer, JSON.parse(localStorage.getItem('state')) ?? { user: null, sequence: [] });
export default store;