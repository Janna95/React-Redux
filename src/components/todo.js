import React, { Component } from 'react';

 class ToDo extends Component {
    constructor(props) {
        super(props)  
    }

    state = { 
        input: ""
    }
    
    handleChange = (event) => {
        this.setState({ input: event.target.value });
        console.log("state in todo-->", this.state)
    }
    
    saveChange = () => {
        let _id = this.props._id;
        let data = this.state.input;
       
        //sends id to it's parent (todoContainer) component
        this.props.edit(data, _id)
    }

    delete = () => {
        //sends id to it's parent (todoContainer) component
        this.props.delete(this.props._id)
    }

    render() {
        return (
            <div className='todo'>
                <input type='text'  defaultValue={this.props.input} onChange={this.handleChange} id={this.props._id} />
                <button onClick={this.saveChange}>Edit-Save</button>
                <button onClick={this.delete}>Delete</button>
            </div>
        )
    }
};

export default ToDo;
   




