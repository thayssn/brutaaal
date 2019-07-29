import { combineReducers } from 'redux';
import allBooksReducer from './all_books';
import allChaptersReducer from './all_chapters';

export default combineReducers(
  {
    allBooksState: allBooksReducer,
    allChaptersState: allChaptersReducer,
  },
);
