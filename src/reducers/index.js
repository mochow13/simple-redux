import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './active_book_reducer';

console.log("combining");

const rootReducer = combineReducers({
    // Any key to the object that we have provided to this combineReducers()
    // will be a key in our global state
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;