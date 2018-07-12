import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Todo from './todo';

 class TodoContainer extends Component {
    constructor(props){
        super(props)
    }
    
    edit = (data, id) => {
        console.log("edit works in Container")
        //sends id to it's parent App component
        this.props.edit(data, id)
    }

    delete = (id) => {
        //sends id to it's parent App component
        this.props.delete(id)
        
    }

    render() {
        return (
            <div>
                {this.props.todoArr.map((todo) => { 
                    return <Todo key ={todo.id} input={todo.input} edit ={this.edit} delete={this.delete} id={todo.id}/> 
                    })
                }
            </div>
        )
     }
};

export default TodoContainer;