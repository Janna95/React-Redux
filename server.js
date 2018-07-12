const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers','Content-Type'  )
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});


app.use(bodyParser.json());


let toDoArr = [{input: "initial", id: 127}];
let id = 0;


app.get('/api/todo', (req, res) => {

    res.json(toDoArr);

});

app.post('/api/todo', (req, res) => {
    console.log("req.body--> ", req.body)
    const newTodo = {
        input: req.body.input,
        id: id++
    };
    toDoArr.push(newTodo); 
    console.log("posted",toDoArr);
    res.json(toDoArr);
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
