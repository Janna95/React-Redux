import React, { Component } from 'react';

 class ToDo extends Component {
    constructor(props) {
        super(props)
    }

    saveChange = () => {
        let id = this.props.id;
        let data = document.getElementById(this.props.id);
       
        //sends id to it's parent (todoContainer) component
        this.props.edit(data.value, id)
        console.log("data.value-->", data.value, ", id-->", id)
    }

    delete = () => {
        //sends id to it's parent (todoContainer) component
        this.props.delete(this.props.id)
    }

    render() {
        { console.log("this.props.input",this.props.input )}
        return (
            <div className='todo'>
                <input type='text'  defaultValue = { this.props.input } id={this.props.id} />
                <button onClick = { this.saveChange }>Edit-Save</button>
                <button onClick = { this.delete }>Delete</button>
            </div>
        )
    }
};

export default ToDo;
