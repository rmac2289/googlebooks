import React, { Component } from 'react';
import './List.css';
import books2 from './books2.jpg_fit=scale'


class List extends Component{
    
    render(){
    return (
        <li>
        <h2>{this.props.title}</h2>
        <h4>{this.props.authors}</h4>
        <img className="image" id="image" src={this.props.image != null ? this.props.image:books2} alt="book"/>
        <p>{this.props.description}</p>
        </li>
    )
}
}
export default List;