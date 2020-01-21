import { combineReducers } from "redux";
import { todoSlice as todosReducer } from "../pages/MainPage/components/TodoList";

export default combineReducers({
  todos: todosReducer
});

