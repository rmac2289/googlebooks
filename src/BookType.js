import React from 'react';

function BookType(){
    return (
        <div className="booktype">
            <label htmlFor="booktype">Book Type:</label>
            <select id="booktype" form="searchForm">
                <option value="">No Filter</option>
                <option value="free-ebooks">Free E-Books</option>
                <option value="paid-ebooks">Paid E-Books</option>
                <option value="full">Full Text</option>
                <option value="partial">Partial Text</option>
            </select>
        </div>
    )
}
export default BookType;