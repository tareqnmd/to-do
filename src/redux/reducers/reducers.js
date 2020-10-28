import { ADD_TODO, DONE_TODO, REMOVE_TODO, UNDO_TODO } from "../actions/actionTypes";

let todo;

if (JSON.parse(localStorage.getItem('todo'))) {
    todo = JSON.parse(localStorage.getItem('todo'))
} else {
    todo = []
}

const initialState = {
    todo: todo
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(todo)
            const createTodo = {
                name: action.name,
                isActive: true,
                id: new Date().getTime() + Math.floor(Math.random() * 1000)
            }
            const addTodo = [...state.todo, createTodo]
            localStorage.setItem('todo', JSON.stringify(addTodo));
            return {
                ...state, todo: addTodo
            }
        case REMOVE_TODO:
            const remaining = state.todo.filter(todo => todo.id !== action.id);
            localStorage.setItem('todo', JSON.stringify(remaining))
            return {
                ...state, todo: remaining
            }
        case DONE_TODO:
            const doneTODO = state.todo.map(todo => {
                if (todo.id === action.id) {
                    todo.isActive = !todo.isActive;
                }
                return todo;
            });
            localStorage.setItem('todo', JSON.stringify(doneTODO));
            return {
                ...state, todo: doneTODO
            }
        case UNDO_TODO:
            const undoTODO = state.todo.map(todo => {
                if (todo.id === action.id) {
                    todo.isActive = !todo.isActive;
                }
                return todo;
            });
            localStorage.setItem('todo', JSON.stringify(undoTODO));
            return {
                ...state, todo: undoTODO
            }
        default:
            return state;
    }
}

export default reducers;