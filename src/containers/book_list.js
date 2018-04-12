// This book_list.js is a component, but a smart component. Also known as container.
// Why? Because it has a direct connection with Redux which is managing the states of our application.
// The names 'smart' or 'dumb' components come from the perspective of Redux

// react-redux is the connector between React and Redux
// This is a separate package
// We have to bind our action to the container
// bindActionCreators() is a function to help the propagation of our actions

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
    renderList() {
        console.log("in renderList()");
        // The props here receive the list of books from Redux
        return this.props.books.map((book)=>{
            console.log("in this.props.books.map");
            return (
                <li
                    key={book.title}
                    // Calling an action on click
                    onClick={()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        console.log("rendering book list");
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// The returned value of this functions will be available to the props of BookList
function mapDispatchToProps(dispatch) {
    console.log("in mapDispatchToProps() for book_list");
    // This is essentially 'dispatching' the action selectBook to all of our reducers
    // Remember, all of our actions have to flow through all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// This function is basically like the glue between React and Redux
function mapStateToProps(state) {
    console.log("in mapStateToProps() for book_list");
    // Returns the book list
    // Whatever is returned from here, will be received by the props of BookList
    // How? This is a thing Redux is taking care of
    // The state is coming from the reducers who are returning any change in the states they
    // are responsible
    return {
        books: state.books
    };
}

// This is like invoking the connection
// The connect() function takes function(s) and a component and produces a container.
// A container is a component that is aware of the state that is contained by redux
// Also we are dispatching our actions using connect()
export default connect(mapStateToProps,mapDispatchToProps)(BookList);