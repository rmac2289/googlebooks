import React from 'react';
import './PrintType.css';
import BookType from './BookType';

function PrintType(props){
    
    return (
        <div className="filters">
            <label htmlFor="print">Print Type:</label>
            <select id="print" form="searchForm">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
            <BookType />
        </div>
    )
}

export default PrintType;