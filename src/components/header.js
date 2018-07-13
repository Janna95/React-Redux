import React, { Component } from 'react';
import './styles/header.css';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    add = () => {
        let input = document.getElementById('main-input');
        if (input.value == "") 
            alert("Todo is empty")
        else 
            this.props.add(input.value)   
    }
    
    render() {
        return (
            <div className="header">
                <h2>My To Do List</h2>
                <input type="text" id="main-input" placeholder="Title..."/>

                <button onClick={ this.add } className="addBtn">Add</button>
            </div>
        )
    }
};

export default Header;