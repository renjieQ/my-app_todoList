import React from "react";
import { useDispatch } from "react-redux";
import { deleTodo, setCheck } from "../features/todoSlice";

const Todo = ({ completed, id, name }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  const handleDele = () => {
    dispatch(deleTodo(id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{name}</li>
      <button onClick={handleCheck} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDele} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
