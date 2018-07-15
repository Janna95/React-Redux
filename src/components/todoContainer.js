import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Todo from './todo';

 class TodoContainer extends Component {
    constructor(props){
        super(props)
    }
    
    edit = (data, id) => {
        //sends id to it's parent App component
        this.props.edit(data, id)
    }

    delete = (_id) => {
        //sends id to it's parent App component
        this.props.delete(_id) 
    }

    render() {
        return (
            <div>
                {this.props.todoArr.map((todo) => { 
                    return <Todo key ={todo._id} input={todo.input} edit ={this.edit} delete={this.delete} _id={todo._id}/> 
                    })
                }
            </div>
        )
     }
};

export default TodoContainer;