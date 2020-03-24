import React, { Component } from 'react';
import './SearchBar.css';
import PrintType from './PrintType';

class SearchBar extends Component {
    
    render(){
        return (
            <div>
            <form id="searchForm" onSubmit={this.props.handleSubmit}>
                <label htmlFor="search">Search</label>
                <input type="text" value={this.props.value} onChange={this.props.searchChanged}id="search"></input>
                <button type="submit">Search</button>
            </form>
            <PrintType printTypeChanged={this.props.printTypeChanged} booktypeChanged={this.props.booktypeChanged}/>
           
            </div>
        )
    }
}

export default SearchBar;