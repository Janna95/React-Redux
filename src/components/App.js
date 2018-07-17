import React, { Component } from "react";
import Header from "./header";
import TodoContainer from './todoContainer'
import { connect } from 'react-redux';
import { getTodos, addTodo, editTodo, deleteTodo } from '../actions'

class WrappedApp extends Component {
 
  componentDidMount() {
    this.props.getTodos();
  }
  
  render() {
    return (
      <div>
      <Header add = {this.props.add}/>
      <TodoContainer todoArr = {this.props.todos} edit = {this.props.edit} delete = {this.props.delete}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos()),
    add:  data => dispatch(addTodo(data)),
    edit: (data, _id) => dispatch(editTodo(data, _id)),
    delete: _id => dispatch(deleteTodo(_id))
}
}
const App = connect(mapStateToProps, mapDispatchToProps)(WrappedApp);

export default App;