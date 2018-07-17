import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Todo from './todo';

 class TodoContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.todoArr.map((todo) => { 
                    return <Todo key ={todo._id} input={todo.input} edit ={this.props.edit} delete={this.props.delete} _id={todo._id}/> 
                    })
                }

            </div>
        )
     }
};

export default TodoContainer;