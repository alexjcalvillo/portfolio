import { combineReducers } from 'redux';
import pages from './pages.reducer';

const rootReducer = combineReducers({
  pages,
});

export default rootReducer;
