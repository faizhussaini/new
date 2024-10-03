import { createStore } from 'redux';
import reducer from '../assets/reducer';

const store = createStore(reducer);

export default store;
