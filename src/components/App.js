import React, { Component } from "react";
import Header from "./header";
import TodoContainer from './todoContainer'

class App extends Component {
  state = {
    todos : []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todo')
    .then(res => res.json())
    .then(response => {
        this.setState({todos: response })
    })
    .catch(error => console.error('Error:', error));
  }

  add = (inputText) => {
    let options = {
      method: 'POST',
      body: JSON.stringify({input: inputText}),
      headers: {"Content-Type": "application/json"}
    };
    fetch('http://localhost:3000/api/todo', options)
    .then(res => res.json())
    .then(response => {
      console.log("add in App.js -->" ,response )
      this.setState({todos: response })
    })
    
    .catch(error => console.error('Error:', error));
  }

  edit = (data, _id) => {
    let options = {
      method: 'PUT',
      body: JSON.stringify({input: data}),
      headers: {
          "Content-Type": "application/json"
      }
    };

    fetch('/api/todo/' + _id, options)
    .then(res => res.json())
    .then(response => {
        //console.log('Success from PUT/edit function:', response)
        this.setState({todos: response })
    })
    .catch(error => console.error('Error:', error));
  }

  delete = (_id) => {
  
    let options = {
        method: 'DELETE',
        body: JSON.stringify({_id: _id}),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch("/api/todos/" + _id, options)
    .then(res => res.json())
    .then(response => {
        //console.log('Success from deleteFetching:', response)
        
        this.setState({todos: response })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <React.Fragment>
      <Header add = {this.add}/>
      <TodoContainer todoArr = {this.state.todos} edit = {this.edit} delete = {this.delete}/>
      </React.Fragment> 
    );
  }
};

export default App;