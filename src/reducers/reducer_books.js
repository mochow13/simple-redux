// Reducers are like functions which return state of components
// so that React can show them
// This is a BooksReducuer which returns the state of the book_list component.
// Remember, Redux is all about the states of our application - something like under-the-hood
export default function() {
    console.log("book list reducer");
    return [
        {title: 'The Immigrants', author: 'Howard Fast', pages: '553'},
        {title: 'Animal Farm', author: 'George Orwell', pages: '172'},
        {title: 'The White Tiger', author: 'Aravinda Adiga', pages: '239'},
        {title: 'Pride and Prejudice', author: 'Jane Austin', pages: '334'},
        {title: 'Harry Potter and the Goblet of Fire', author: 'J K Rowling', pages: '712'}
    ]
}