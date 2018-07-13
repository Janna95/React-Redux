import React, { Component } from 'react';
import './styles/header.css';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        input: ""
    }

    handleChange = (event) => {
        console.log(this.state)
        this.setState({input: event.target.value});
    }

    add = () => {
        if (this.state.input == "") 
            alert("Todo is empty")
        else 
            this.props.add(this.state.input)   
    }
    
    render() {
        return (
            <div className="header">
                <h2>My To Do List</h2>
                <input type="text" id="main-input" value={this.state.input} onChange={this.handleChange}  placeholder="Title..."/>

                <button onClick={this.add} className="addBtn">Add</button>
            </div>
        )
    }
};

export default Header;