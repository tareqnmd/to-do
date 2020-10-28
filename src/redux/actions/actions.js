import { ADD_TODO, DONE_TODO, REMOVE_DONE_TODO, REMOVE_TODO, UNDO_TODO } from "./actionTypes"

export const addTODO = (name) => {
    return {type: ADD_TODO, name}
}

export const removeTODO = (id) => {
    return {type: REMOVE_TODO, id}
}

export const doneTODO = (id) => {
    return {type: DONE_TODO, id}
}

export const undoTODO = (id) => {
    return {type: UNDO_TODO, id}
}

export const removeDoneTODO = (id) => {
    return {type: REMOVE_DONE_TODO, id}
}