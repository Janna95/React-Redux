export default function todoReducer(prevState, action) {
    switch (action.type) {
        case 'GET_TODOS_SUCCESS':
            return {...prevState, todos: action.todos}

        case 'ADD_TODO_SUCCESS':
            return {...prevState, todos: action.todos}

        case 'EDIT_TODO_SUCCESS':
       // console.log(prevState.todos, "prevState.todos")
            let newArr = prevState.todos.map((elem) => {
              if(elem._id == action._id) {
                  elem.input = action.data
               }
               return elem
            })
            return { todos: newArr }


        case 'DELETE_TODO_SUCCESS':
            let delArr = prevState.todos.filter((elem) => {
                return elem._id != action._id
            })
            return {todos: delArr}

        default: 
            return prevState
    }
}