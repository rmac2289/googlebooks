import React, { Component } from 'react';
import './List.css';


class List extends Component{
    
    render(){
    return (
        <li>
        <h2>{this.props.title}</h2>
        <img className="image" id="image" src={this.props.image} alt="book"/>
        <h3>{this.props.author}</h3>
        <p>{this.props.description}</p>
        </li>
    )
}
}
export default List;