import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

// this is a special component (smart component) which is aware of the redux state

// if a state changes the container will automatically rerender the page

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Whatever this function returns it will be automatically available
//  above in the BookList container/component
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

// Everything this function returns will be available
// as props on the BookList container/component
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers through the dispatch tunnel
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// connect function takes a function (mapStateToProps) and a component
// and returns a container that is aware of the redux state
// This function is actually a glue between the Redux and React
export default connect(mapStateToProps, mapDispatchToProps)(BookList)