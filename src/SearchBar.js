import React, { Component } from 'react';
import './SearchBar.css';
import PrintType from './PrintType';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    this.state = {
        q: '',
        printType: '',
        filter: ''
    }
}
    searchChanged = (event) => {
        this.setState({
          q: event.target.value
        });
      }
    printTypeChanged = (event) => {
        this.setState({
            printType: event.target.value
        })
    }
    booktypeChanged = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.value)
        event.preventDefault();
        
        /* const searchCriteria = (({q, printType, filter}) => ({q, printType, filter}))(this.state);
        const url = 'https://www.googleapis.com/books/v1/volumes?' */ 
    }
    render(){
        return (
            <div>
            <form id="searchForm" onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search</label>
                <input type="text" value={this.state.value} onChange={this.searchChanged}id="search"></input>
                <button type="submit">Search</button>
            </form>
            <PrintType />
            </div>
        )
    }
}


export default SearchBar;