import axios from 'axios'
import { ADD_NEW_TODO, GET_ALL_TODO,TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './type';

const API_URL = 'http://localhost:5000';

export const addNewTodo = (data) => async(dispatch) =>{
    try{
        const res = await axios.post(`${API_URL}/todo`,{data});
        dispatch({type: ADD_NEW_TODO , payload:res.data});
    }catch(error){
        console.log('Error while calling addNewTodo');
    }
}

export const getAllTodos = () => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todo`);
        dispatch({type: GET_ALL_TODO , payload:res.data});
    }catch(error){
        console.log('Error while calling getAll todos');
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todo/${id}`);
        dispatch({type: TOGGLE_TODO , payload:res.data});
    }catch(error){
        console.log('Error while calling toggleTodo');
    }
}

export const updateTodo = (id,data) => async (dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todo/${id}`,{data});
        dispatch({type: UPDATE_TODO , payload:res.data});
    }catch(error){
        console.log('Error while calling UpdateTodo');
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todo/${id}`);
        dispatch({type: DELETE_TODO , payload:res.data});
    }catch(error){
        console.log('Error while calling deleteTodo');
    }
}