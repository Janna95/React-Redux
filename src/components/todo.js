import React, { Component } from 'react';

 class ToDo extends Component {
    constructor(props) {
        super(props)
    }

    saveChange = () => {
        let id = this.props.id;
        let data = document.getElementById("inputText");
        //sends id to it's parent (todoContainer) component
        this.props.edit(data.value, id)
        console.log("data.value, id--->", data.value, id)
    }

    delete = () => {
        //sends id to it's parent (todoContainer) component
        this.props.delete(this.props.id)
    }

    render() {
        { console.log(this.props.input )}
        return (
            <div className='todo'>
                <input type='text' id="inputText" defaultValue = { this.props.input } />
                <button onClick = { this.saveChange }>Edit</button>
                <button onClick = { this.delete }>Delete</button>
            </div>
        )
    }
};

export default ToDo;
