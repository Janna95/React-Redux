export default function todoReducer(prevState, action) {
    console.log(action, "action in reducer")
    switch (action.type) {
        case 'GET_TODOS_SUCCESS':
            return {...prevState, todos: action.todos}

        case 'ADD_TODO_SUCCESS':
            return {...prevState, todos: action.todos}

        case 'EDIT_TODO':
            return {...prevState, todos: action.todos}

        case 'DELETE_TODO_SUCCESS':
            return {...prevState, todos: action.todos}

        default: 
            return prevState
    }
}