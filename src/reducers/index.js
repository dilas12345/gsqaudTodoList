import { combineReducers } from 'redux';
import todoList from './todoList';
import visibilityFilter from './visibilityFilter';
import theme from './theme';

const todoApp = combineReducers({
    todoList,
    visibilityFilter,
    theme
});

export default todoApp;