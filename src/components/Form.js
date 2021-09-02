import React from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Form = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(
        saveTodo({
          item: input,
          completed: false,
          id: Date.now(),
          // id: Math.random() * 1000,
        })
      );
    }
    return;
  };

  return (
    <form>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"> i am Form</i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
