import React, { Component } from 'react';
import './PrintType.css';
import BookType from './BookType';

class PrintType extends Component{

    render(){
    return (
        <div className="filters">
            <label htmlFor="print">Print Type:</label>
            <select className="select" value={this.props.printType} onChange={this.props.printTypeChanged} id="print" form="searchForm">
                <option value="">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
            <div>
            <BookType booktypeChanged={this.props.booktypeChanged}/>
            </div>
        </div>
    )
    }
}

export default PrintType;