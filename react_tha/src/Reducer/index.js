import name from './name';
import email from './email';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({name,email});

export default rootReducer;
