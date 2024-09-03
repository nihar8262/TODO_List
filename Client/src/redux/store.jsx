import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'
import { TodosReducers } from './reducers/TodosReducers';


const reducer = combineReducers({
    todo: TodosReducers
})

const middleware =[thunk];

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;