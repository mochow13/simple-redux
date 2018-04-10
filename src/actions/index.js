// Actions are just 'actions' done by users :P
// This is an action creator. It will create the action so that the corresponding states get updated
// The action that returns from an action-creator should end up in all the reducers
// The action is returned in the form of an object
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}