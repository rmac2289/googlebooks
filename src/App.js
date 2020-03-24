import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import List from './List';



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      q: '',
      printType: 'All',
      bookType: 'No Filter',
      books: []
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
          bookType: event.target.value
      }) 
    }
    handleSubmit = (event) => {
      let url;
      event.preventDefault();
      if (this.state.bookType === 'No Filter'){
        url =  `https://www.googleapis.com/books/v1/volumes?q=` + this.state.q + `&printType=` + this.state.printType + `&key=AIzaSyD8UWoPDZssIjtLLe_ogggrymmRyrg_71E`
      } else {
        url = `https://www.googleapis.com/books/v1/volumes?q=` + this.state.q + `&printType=` + this.state.printType + `&filter=`+ this.state.bookType + `&key=AIzaSyD8UWoPDZssIjtLLe_ogggrymmRyrg_71E`
      }
      const options =  {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      };
      fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        const element = document.getElementById("image");
      element.classList.remove("image");
        const books = Object.keys(data.items).map(function(key){
          return [Number(key),data.items[key]];
          })
    
        this.setState({
          books      
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
      
  }
    

    
  
  render(){
    const listItems = this.state.books
    
  return (
    <div className="App">
      <header id="header">
        <h1>Google Book Search</h1>
      </header>
      <SearchBar 
      printTypeChanged={this.printTypeChanged} 
      booktypeChanged={this.booktypeChanged}
      handleSubmit={this.handleSubmit}
      searchChanged={this.searchChanged}
      />
      <ul>
        {listItems.map((value,index) => {
          return <List key={index}
          title={value[1].volumeInfo.title}
          authors={value[1].volumeInfo.authors[0]}
          image={value[1].volumeInfo.imageLinks.smallThumbnail}
          description={value[1].volumeInfo.description}
          />
             })}
          <List />
      </ul>
    </div>
  );
}}

export default App;
