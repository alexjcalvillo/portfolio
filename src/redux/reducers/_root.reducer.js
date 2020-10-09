import { combineReducers } from 'redux';
import pages from './pages.reducer';
import email from './email.reducer';

const rootReducer = combineReducers({
  pages,
  email,
});

export default rootReducer;
