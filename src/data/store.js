import { todoReducer } from './todo/todoReducer';
import {createStore,combineReducers} from 'redux';
import { visibilityReducer } from './visibilty/visibilityReducer';

const reducer = combineReducers({
    todos: todoReducer,
    visibility: visibilityReducer
})

module.exports = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



