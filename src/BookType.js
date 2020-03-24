import React, { Component } from 'react';

class BookType extends Component{
    
    render(){
    return (
        <div className="booktype">
            <label htmlFor="booktype">Book Type:</label>
            <select className="selectbook" value={this.props.bookType} onChange={this.props.booktypeChanged} id="booktype" form="searchForm">
                <option value="">No Filter</option>
                <option value="free-ebooks">Free E-Books</option>
                <option value="paid-ebooks">Paid E-Books</option>
                <option value="full">Full Text</option>
                <option value="partial">Partial Text</option>
            </select>
        </div>
    )
}}
export default BookType;