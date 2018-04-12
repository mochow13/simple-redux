// Every reducer gets two arguments: current state and action.
// Reducers get called only when there is an action. So every time such function is called, there is an action in th
// function argument.
// Now what is the 'state' here? State is not the application state. It is the state that the reducer is responsible for.
// For instance, the reducer_books.js is responsible for the list of books.
// Every time a reducer gets called, the 'state' argument has the current state that the reducer is responsible for.

export default function(state=null, action) {
    console.log("active book list reducer");
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}