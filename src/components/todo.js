import React, { Component } from 'react';

 class ToDo extends Component {
    constructor(props) {
        super(props)
    }

    saveChange = () => {
        let _id = this.props._id;
        let data = document.getElementById(this.props._id);
       
        //sends id to it's parent (todoContainer) component
        this.props.edit(data.value, _id)
        console.log("data.value-->", data.value, ", id-->", _id)
    }

    delete = () => {
        //sends id to it's parent (todoContainer) component
        this.props.delete(this.props._id)
    }

    render() {
        { console.log("this.props",this.props )}
        return (
            <div className='todo'>
                <input type='text'  defaultValue = { this.props.input } id={this.props._id} />
                <button onClick = { this.saveChange }>Edit-Save</button>
                <button onClick = { this.delete }>Delete</button>
            </div>
        )
    }
};

export default ToDo;
