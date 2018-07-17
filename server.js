const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/todoDB", { useNewUrlParser: true })
const db = mongoose.connection;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers','Content-Type'  )
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
    
});
app.use(bodyParser.json());

/**
 * database
 */

db.once("open", function () {
    console.log('Connection is OK')
});
const todoSchema = new Schema({
    input: String,
});

const Todo = mongoose.model("Todo", todoSchema);

let toDoArr = [];

app.get('/api/todo', (req, res) => {
    res.json(toDoArr);
});

app.post('/api/todo', (req, res) => {
    
    const newTodo = new Todo({ input: req.body.input });

    newTodo.save(function(err, todo) {
        if(err) return console.error(err);
        
        console.log("todo from database ", todo)
        toDoArr.push(todo);
        res.json(toDoArr);
        console.log(toDoArr);

    })
});

app.put('/api/todo/:id', (req, res) => {

    console.log("id from server, put " , req.params.id);
    let editedObj = toDoArr.find( elem => elem.id == req.params.id );
    editedObj.input = req.body.input;
    res.json(toDoArr);

});

app.delete('/api/todos/:id', (req, res) => {

    console.log("id from server, delete " ,req.params.id);
    let deleted = toDoArr.find( elem => elem.id == req.params.id );
    toDoArr.splice(toDoArr.indexOf(deleted), 1)
    res.json(toDoArr);

});

app.get('*', (req, res) => res.end('404 not found'));

app.listen(3000);
