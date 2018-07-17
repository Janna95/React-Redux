export function getTodos() {
    return function (dispatch) {
        fetch('http://localhost:3000/api/todo')
        .then(res => res.json())
        .then(response => {
           dispatch(getTodosSuccess(response))
        })
        .catch(error => console.error('Error:', error));
    }
};


function getTodosSuccess(data) {
    console.log(data, "in succceesss")
    return {
        type: "GET_TODOS_SUCCESS",
        todos: data
    }
}

export function addTodo(inputText) {
    return function(dispatch) {
        let options = {
            method: 'POST',
            body: JSON.stringify({input: inputText}),
            headers: {"Content-Type": "application/json"}
        };

        fetch('http://localhost:3000/api/todo', options)
        .then(res => res.json())
        .then(response => {
            dispatch(addTodoSuccess(response))
        })
        .catch(error => console.error('Error:', error));
    }
};

function addTodoSuccess(data) {
    return {
        type: "ADD_TODO_SUCCESS",
        todos: data
    }
}

export function editTodo(data, _id) {
   return function(dispatch) {
    let options = {
        method: 'PUT',
        body: JSON.stringify({input: data}),
        headers: {
            "Content-Type": "application/json"
        }
      };
      fetch('/api/todo/' + _id, options)
      .then(res => res.json())
      .then(_id => {
        dispatch(editTodoSuccess(data, _id))
      })
      .catch(error => console.error('Error:', error));
   } 
};

function editTodoSuccess(data, _id) {
    return {
        type: 'EDIT_TODO_SUCCESS',
        data,
        _id
    }
}

export function deleteTodo(_id) {
    return function(dispatch) {
        //console.log(_id, "actions")
        let options = {
            method: 'DELETE',
            body: JSON.stringify({_id: _id}),
            headers: {
                "Content-Type": "application/json"
            }
        };
    
        fetch("/api/todos/" + _id, options)
        .then(res => res.json())
        .then(_id => {
           // console.log( response, '<-Success from deleteFetching')
            dispatch(deleteTodoSuccess(_id))
        })
        .catch(error => console.error('Error:', error));
    }
};

function deleteTodoSuccess(_id, response) {
    console.log(_id, "del _id in action")
    return {
        type: "DELETE_TODO_SUCCESS",
        _id,
        todos: response
    }
}
