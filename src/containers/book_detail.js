import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        console.log("rendering book detail");
        if(!this.props.book) {
            console.log("no book selected yet");
            return (<div>Select a book.</div>)
        }        
        return (
            <div>
                <h3>Title: {this.props.book.title}</h3>
                <h4>Author: {this.props.book.author}</h4>
                <h5>Pages: {this.props.book.pages}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("in mapStateToProps() for book_detail");
    return {
        // Where does this 'activeBook' come from?
        // It comes from combineReducers() function where we combine the separate states collected from the reducers
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);