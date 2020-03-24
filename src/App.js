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
      title: '',
      authors: '',
      description: '',
      


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
      event.preventDefault();
      const url = 'https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=AIzaSyD8UWoPDZssIjtLLe_ogggrymmRyrg_71E'
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
        console.log(data);
        const element = document.getElementById("image");
      element.classList.remove("image");
        const books = Object.values(data.items)
        console.log(books)
        
        books.forEach((book) => {
          console.log(book)
        this.setState({
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          authors: book.volumeInfo.authors[0],
          image: book.volumeInfo.imageLinks.smallThumbnail
        })
      })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
      
  }
    

    
  
  render(){
  return (
    <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <SearchBar 
      printTypeChanged={this.printTypeChanged} 
      booktypeChanged={this.booktypeChanged}
      handleSubmit={this.handleSubmit}
      searchChanged={this.searchChanged}
      />
      <ul>
        <List 
        title={this.state.title}
        description={this.state.description}
        authors={this.state.authors}
        image={this.state.image}
        />
      </ul>
    </div>
  );
}}

export default App;
