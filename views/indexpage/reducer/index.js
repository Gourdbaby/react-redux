import { combineReducers } from 'redux';
import todoReducer1 from './todoReducer1';
import todoReducer2 from './todoReducer2';

const reducer = combineReducers({
    todoReducer1,
    todoReducer2
})

export default reducer;