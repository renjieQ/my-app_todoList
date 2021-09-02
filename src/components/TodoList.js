import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((item) => (
          <Todo name={item.item} completed={item.completed} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
