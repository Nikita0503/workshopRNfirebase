import { create } from "react-test-renderer";
import {createStore} from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer);

export default store;