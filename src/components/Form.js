import React from "react";

const Form = ({ inputText, setInputText }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={handleInputText}
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
          <option value="uncompleted">Uncomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
