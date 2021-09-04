import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.completed === true) {
            item.completed = false;
          } else {
            item.completed = true;
          }
        }
        return item;
      });
    },
    deleTodo: (state, action) => {
      state.todoList = state.todoList.filter((el) => el.id !== action.payload);
    },
  },
});

export const { saveTodo, setCheck, deleTodo } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
