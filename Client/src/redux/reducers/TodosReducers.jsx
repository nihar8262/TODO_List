import React from 'react'
import * as actionTypes from '../actions/type';

export const TodosReducers = (state = [],action) => {

    switch (action.type){
        case actionTypes.ADD_NEW_TODO:
            return [action.payload, ...state]
        case actionTypes.GET_ALL_TODO:
            return action.payload
        case actionTypes.TOGGLE_TODO:
            return state.map(todo =>(
                todo._id === action.payload._id ? {...todo, done : !todo.done } : todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map(todo =>(
                todo._id === action.payload._id ? {...todo, data : action.payload.data } : todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);
        default:
            return state;
    }
}
