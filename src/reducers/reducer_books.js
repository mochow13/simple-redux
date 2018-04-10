// Reducers are like functions which return state of components
// so that React can show them
// This is a BooksReducuer which returns the state of the book_list component.
// Remember, Redux is all about the states of our application - something like under-the-hood
export default function() {
    return [
        {title: 'The Immigrants'},
        {title: 'Animal Farm'},
        {title: 'The White Tiger'},
        {title: 'Pride and Prejudice'},
        {title: 'Harry Potter and the Goblet of Fire'}
    ]
}