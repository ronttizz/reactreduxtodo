import { createSlice } from "@reduxjs/toolkit";

export const todoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 2, content: "Meet George" },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addToDo, deleteTodo, editTodo } = todoSlider.actions;

export default todoSlider.reducer;
